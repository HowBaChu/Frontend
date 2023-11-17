import { Axios } from "./Axios";

export const GetMyOpin = async (memberId) => {
  try {
    const response = await Axios.get(`/api/v1/opin/member`, {
      params: {
        id: memberId,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
