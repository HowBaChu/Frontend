import { Axios } from "./Axios";

export const GetMyOpin = async () => {
  try {
    return await Axios.get(`/api/v1/opin/my`);
  } catch (error) {
    console.log(error);
  }
};
