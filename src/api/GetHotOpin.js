import { Axios } from "./Axios";

export const GetHotOpin = async () => {
  try {
    const response = await Axios.get("/api/v1/opin/trending");
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
