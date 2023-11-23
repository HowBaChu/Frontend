import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetTopic } from "../api/GetTopic";
import { GetOpin } from "../api/GetOpin";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import OpinionInput from "../components/OpinionInput";
import { GetVoteStatus } from "../api/GetVoteStatus";
import { PostVote } from "../api/PostVote";

const MainPage = ({ openModal, setCuropinId }) => {
  const [isSmall, setIsSmall] = useState(false);
  const [topicData, setTopicData] = useState({}); // GetTopic response
  const [opinList, setOpinList] = useState([]); // GetOpin response
  const [isVoted, setIsVoted] = useState(undefined);

  const navigate = useNavigate();

  const handleVote = (selection) => {
    PostVote(selection);
    setIsVoted(true);
  };
  const reloadOpinList = () => {
    GetOpin((newOpinListData) => {
      setOpinList(newOpinListData);
    });
  };
  const handleOpinionScroll = (event) => {
    setIsSmall(event.target.scrollTop > 30);
  };
  useEffect(() => {
    GetOpin((opinListdata) => setOpinList(opinListdata));
  }, []);
  useEffect(() => {
    GetTopic((data) => {
      setTopicData(data);
    });
  }, []);
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
            {opinList.content?.map((opin) => {
              return (
                <OpinionBox
                  key={opin.id}
                  opinContent={opin}
                  onClick={() => {
                    navigate(`/${opin.id}`);
                  }}
                  openModal={openModal}
                  setCuropinId={setCuropinId}
                />
              );
            })}
          </OpinionContainer>
        )}
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
