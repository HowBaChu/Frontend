import styled from "styled-components";
import { PostLogout } from "../api/PostLogout";
import { useNavigate } from "react-router-dom";

const LogoutBtn = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onClick = async () => {
    const responseCode = await PostLogout();
    if (responseCode === "200") {
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return <Logout onClick={onClick}>Logout</Logout>;
};

const Logout = styled.button`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.PURPLE2};
`;

export default LogoutBtn;
