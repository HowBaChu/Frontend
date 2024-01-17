import styled from "styled-components";
import { useState } from "react";
import { GetSearch } from "../api/GetSearch";
import Topic from "../components/Topic";
import Opinion from "../components/Opinion";
import SEARCH_ICON from "../assets/imgs/search_icon.svg";

const SearchPage = () => {
  const [value, setValue] = useState("");

  const [childOpinList, setChildOpinList] = useState([]);
  const [parentsOpinList, setParentsOpinList] = useState([]);
  const [topicList, setTopicList] = useState([]);

  const [page, setPage] = useState({
    child: 1,
    parent: 1,
    topic: 1,
  });

  const [isLast, setIsLast] = useState({
    child: false,
    parent: false,
    topic: false,
  });

  const updateListAndPage = (path, list) => {
    if (path === "child-opin") {
      setChildOpinList((prevState) => [...prevState, ...list]);
      setPage((prevPage) => ({
        ...prevPage,
        child: prevPage.child + 1,
      }));
    }
    if (path === "parent-opin") {
      setParentsOpinList((prevState) => [...prevState, ...list]);
      setPage((prevPage) => ({
        ...prevPage,
        parent: prevPage.parent + 1,
      }));
    }
    if (path === "topic") {
      setTopicList((prevState) => [...prevState, ...list]);
      setPage((prevPage) => ({
        ...prevPage,
        topic: prevPage.topic + 1,
      }));
    }
  };

  const getMore = async (path, section) => {
    let currentpage = page[section];
    const searchData = await GetSearch(value, path, currentpage);

    updateListAndPage(path, searchData?.content);

    if (path === "child-opin") {
      setIsLast((prevState) => ({
        ...prevState,
        child: searchData.last,
      }));
    }
    if (path === "parent-opin") {
      setIsLast((prevState) => ({
        ...prevState,
        parent: searchData.last,
      }));
    }
    if (path === "topic") {
      setIsLast((prevState) => ({
        ...prevState,
        topic: searchData.last,
      }));
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchData = await GetSearch(value);
    setChildOpinList(searchData?.childOpinList?.content);
    setParentsOpinList(searchData?.parentsOpinList?.content);
    setTopicList(searchData?.topicList?.content);

    setIsLast((prevState) => ({
      ...prevState,
      child: searchData?.childOpinList?.last,
    }));
    setIsLast((prevState) => ({
      ...prevState,
      parent: searchData?.parentsOpinList?.last,
    }));
    setIsLast((prevState) => ({
      ...prevState,
      topic: searchData?.topicList?.last,
    }));
  };

  return (
    <PageWrapper>
      <SearchBar onSubmit={onSubmit}>
        <Bull>&bull;</Bull>
        <SearchInput
          placeholder="검색어를 입력해주세요"
          autoFocus
          value={value}
          onChange={(e) => onChange(e)}
        />
        <Button disabled={value.length === 0}>
          <Icon src={SEARCH_ICON} />
        </Button>
      </SearchBar>
      <ResultWrapper>
        <ResultWrapper>
          {parentsOpinList?.length !== 0 && (
            <Area>
              <Title>댓글</Title>
              <ResultBox>
                {parentsOpinList?.map((opin) => (
                  <ResultOpinion key={opin.title} opinContent={opin} />
                ))}
              </ResultBox>
              {!isLast.parent && (
                <MoreBtn onClick={() => getMore("parent-opin", "parent")}>
                  ﹒﹒﹒ 댓글 더보기 ﹒﹒﹒
                </MoreBtn>
              )}
            </Area>
          )}

          {childOpinList?.length !== 0 && (
            <Area>
              <Title>대댓글</Title>
              <ResultBox>
                {childOpinList?.map((opin) => (
                  <ResultOpinion key={opin.author} opinContent={opin} />
                ))}
              </ResultBox>
              {!isLast.child && (
                <MoreBtn onClick={() => getMore("child-opin", "child")}>
                  ﹒﹒﹒ 대댓글 더보기 ﹒﹒﹒
                </MoreBtn>
              )}
            </Area>
          )}

          {topicList.length !== 0 && (
            <Area>
              <Title>토픽</Title>
              <ResultBox>
                {topicList?.map((topic) => (
                  <ResultTopic
                    key={topic.title}
                    isVoted={true}
                    history={true}
                    isList={true}
                    topicData={topic}
                  />
                ))}
              </ResultBox>
              {!isLast.topic && (
                <MoreBtn onClick={() => getMore("topic", "topic")}>
                  ﹒﹒﹒ 토픽 더보기 ﹒﹒﹒
                </MoreBtn>
              )}
            </Area>
          )}
        </ResultWrapper>
      </ResultWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
`;
const SearchBar = styled.form`
  width: 100%;
  height: 40px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Bull = styled.p`
  font-size: ${({ theme }) => theme.fontsize.B_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;
const SearchInput = styled.input`
  width: 80%;
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  border: none;
  background-color: transparent;
`;
const Button = styled.button`
  width: 35px;
  height: 35px;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
const ResultWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 20px 2px;
  overflow: scroll;
`;
const Area = styled.div`
  width: 100%;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const MoreBtn = styled.button`
  width: 100%;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.TXT_GRAY};
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const Title = styled.p`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${({ theme }) => theme.fontsize.S_TOPIC_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const ResultOpinion = styled(Opinion)`
  width: 100%;
`;
const ResultTopic = styled(Topic)``;

export default SearchPage;
