import { Axios } from "./Axios";

export const DeleteOpin = async (opinId) => {
  try {
    const response = await Axios.delete(`/api/v1/opin/${opinId}`);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
  }
};
