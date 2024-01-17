import { Axios } from "./Axios";

export const GetSearch = async (value, path, page) => {
  try {
    const response = await Axios.get(
      `/api/v1/search/${path ? path + "/" : ""}`,
      {
        params: { cond: value, pageNumber: page },
      },
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
