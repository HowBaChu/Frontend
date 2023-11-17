import { Axios } from "./Axios";

export const PostOpin = async (opinData, opinId) => {
  try {
    const response = await Axios.post(`/api/v1/opin`, {
      content: opinData,
      parentId: opinId,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("댓글 등록 중 에러 발생:", error);
    throw error;
  }
};
