import { Axios } from "./Axios";

export const GetVoteStatus = async () => {
  try {
    const response = await Axios.get(`/api/v1/vote`);
    return response.data.responseCode;
  } catch (error) {
    return error.response.data.errorCode;
  }
};
