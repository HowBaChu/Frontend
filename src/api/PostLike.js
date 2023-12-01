import { Axios } from "./Axios";

export const PostLike = async (opinId) => {
  const response = await Axios.post("/likes", null, {
    params: {
      opinId: opinId,
    },
  });
  return response;
};
