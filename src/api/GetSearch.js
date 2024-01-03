import { Axios } from "./Axios";

export const GetSearch = async (value) => {
  try {
    const response = await Axios.get(`/api/v1/search`, {
      params: { cond: `${value}` },
    });
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
