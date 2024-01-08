import { Axios } from "./Axios";

export const GetOpin = async (callbackFunctions, opinId, page) => {
  try {
    const response = await Axios.get(`/api/v1/opin/${opinId ? opinId : ""}`, {
      params: { page: page },
    });
    callbackFunctions(response.data.data.content);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
