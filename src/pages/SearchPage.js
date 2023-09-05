import styled from "styled-components";
import SEARCH_ICON from "../assets/imgs/search_icon.svg";

const SearchPage = () => {
  return (
    <PageWrapper>
      <SearchBar>
        <Bull>&bull;</Bull>
        <SearchInput placeholder="검색어를 입력해주세요" autoFocus />
        <Button>
          <Icon src={SEARCH_ICON} />
        </Button>
      </SearchBar>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: calc(100vw - 44px);
  height: calc(100vh - 70px - 50px); // 헤더, Nav
  margin: 70px auto 0 auto;
`;
const SearchBar = styled.div`
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

export default SearchPage;
