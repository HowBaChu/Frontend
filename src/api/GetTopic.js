import { Axios } from "./Axios";

export const GetTopic = async () => {
  try {
    const response = await Axios.get(`/api/v1/topic`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error.response.data.code;
  }
};
