import { Axios } from "./Axios";

export const PatchProfileDetail = async (formdata) => {
  try {
    return await Axios.patch(`/api/v1/member`, formdata);
  } catch (error) {
    console.log(error);
  }
};
