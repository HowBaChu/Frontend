import { Axios } from "./Axios";

export const DeleteOpin = async (opinId) => {
  try {
    const response = await Axios.delete("/api/v1/opin", {
      params: {
        opinId: opinId,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
