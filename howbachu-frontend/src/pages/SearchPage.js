import styled from "styled-components";
import SEARCH_ICON from "../assets/search_icon.png"
const SearchPage = () => {
    return (
        <SearchBar>
            <SearchInput placeholder="검색어를 입력해주세요" autoFocus />
            <Button>
                <Icon src={SEARCH_ICON}/>
            </Button>
        </SearchBar>
    );
};

const SearchBar = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 3px solid ${({theme}) => theme.colors.GRAY};
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const SearchInput = styled.input`
  width: 80%;
  font-size: 17px;
  border: none;
`
const Button = styled.button`
  width: 35px;
  height: 35px;
`
const Icon = styled.img`
  width: 25px;
  height: 25px;
`
export default SearchPage;