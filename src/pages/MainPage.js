import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetVoteStatus } from "../api/GetVoteStatus";
import { PostVote } from "../api/PostVote";
import { GetOpin } from "../api/GetOpin";
import Topic from "../components/Topic";
import OpinionInput from "../components/OpinionInput";
import Opinion from "../components/Opinion";

const MainPage = ({
  topicData,
  isLoggedIn,
  toggleReportModal,
  toggleDeleteModal,
  setCuropinId,
  reloadOpinList,
  opinList,
  setOpinList,
}) => {
  const [isSmall, setIsSmall] = useState(false);
  const [isVoted, setIsVoted] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  const navigate = useNavigate();

  const handleVote = (selection) => {
    PostVote(selection);
    setIsVoted(true);
  };
  const handleOpinionScroll = (event) => {
    setIsSmall(event.target.scrollTop > 30);
  };

  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading || isLastPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
          setIsLoading(true);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, isLastPage, page],
  );

  useEffect(() => {
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  useEffect(() => {
    const fetchVoteStatus = async () => {
      try {
        const voteStatusData = await GetVoteStatus();

        if (voteStatusData === "VOTING_SUCCESS") setIsVoted(true);
        else if (voteStatusData === "VOTE_NOT_FOUND") setIsVoted(false);
      } catch (error) {
        console.error("vote status data fetching error", error);
      }
    };
    fetchVoteStatus();
  }, []);

  useEffect(() => {
    GetOpin((opinListdata) => setOpinList(opinListdata), undefined, page);
  }, []);

  useEffect(() => {
    const reloadData = async () => {
      try {
        const responseData = await GetOpin(
          (opinListdata) => console.log(opinListdata),
          undefined,
          page,
        );

        setIsLastPage(responseData?.last);

        if (Array.isArray(responseData?.content)) {
          setOpinList((prevOpinList) =>
            Array.isArray(prevOpinList)
              ? [...prevOpinList, ...responseData.content]
              : [...responseData.content],
          );
        }
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      reloadData();
    }
  }, [isLoading, isLastPage, page]);

  return (
    <MainPageLayout>
      <TopicBox
        id="topic"
        isVoted={isVoted}
        handleVote={handleVote}
        isSmall={isSmall}
        topicData={topicData}
      />
      <OpinionArea
        $isVoted={isVoted}
        $isSmall={isSmall}
        onScroll={handleOpinionScroll}
      >
        {opinList && (
          <OpinionContainer $isSmall={isSmall}>
            {opinList?.map((opin, index) => {
              if (opinList.length === index + 1) {
                return (
                  <OpinionBox
                    ref={lastElementRef}
                    reloadOpinList={reloadOpinList}
                    key={opin.id}
                    opinContent={opin}
                    onClick={() => {
                      navigate(`/${opin.id}`);
                    }}
                    toggleReportModal={toggleReportModal}
                    toggleDeleteModal={toggleDeleteModal}
                    setCuropinId={setCuropinId}
                  />
                );
              } else {
                return (
                  <OpinionBox
                    reloadOpinList={reloadOpinList}
                    key={opin.id}
                    opinContent={opin}
                    onClick={() => {
                      navigate(`/${opin.id}`);
                    }}
                    toggleReportModal={toggleReportModal}
                    toggleDeleteModal={toggleDeleteModal}
                    setCuropinId={setCuropinId}
                  />
                );
              }
            })}
          </OpinionContainer>
        )}
        {isLoading && <p>로딩중 . . .</p>}
      </OpinionArea>
      <Input onOpinSubmit={() => reloadOpinList()} disabled={!isVoted} />
    </MainPageLayout>
  );
};

const MainPageLayout = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 40px - 50px); // 헤더, 하단 입력창, Nav
  margin: 70px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const OpinionArea = styled.div`
  width: 100%;
  margin-top: ${({ $isVoted }) => ($isVoted ? `100px` : `200px`)};
  padding: ${({ $isVoted }) => ($isVoted ? `100px 0 15px` : `0 15px`)};
  height: 100%;
  overflow: scroll;
  filter: ${({ $isVoted }) => !$isVoted && `blur(5px)`};
`;
const OpinionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const TopicBox = styled(Topic)`
  width: calc(100vw - 44px);
`;
const OpinionBox = styled(Opinion)`
  cursor: pointer;
`;
const Input = styled(OpinionInput)`
  position: fixed;
  bottom: 50px;
  background-color: white;
`;

export default MainPage;
