import { useState } from "react";
import Cookies from "js-cookie";

export const useVoteState = () => {
  const [isVoted, setIsVoted] = useState("");

  const setCookie = () => {
    const vote = Cookies.get("Vote");
    setIsVoted(vote);
  };

  return { setCookie, isVoted };
};

export default useVoteState;
