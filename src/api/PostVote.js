import { Axios } from "./Axios";

export const PostVote = async (selection) => {
  try {
    const response = await Axios.post(`/api/v1/vote`, {
      selection: selection,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("투표 중 에러:", error);
    throw error;
  }
};
