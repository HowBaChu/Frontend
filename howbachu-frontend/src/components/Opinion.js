import styled from "styled-components";

const Opinion = ({className}) => {
    return (
        <OpinionWrapper className={className}>
            <OpinionBox>
                <Profile />
                <UserName />
                <OpinTitle />
                <Content />
            </OpinionBox>
        </OpinionWrapper>
    );
};

const OpinionWrapper = styled.div`
  width: 240px;
  height: 70px;
  border: 1px solid #252525;
  border-radius: 8px;
`
const OpinionBox = styled.div`
`
const Profile = styled.div`
`
const UserName = styled.div`
`
const OpinTitle = styled.div`
`
const Content = styled.div`
`
export default Opinion;