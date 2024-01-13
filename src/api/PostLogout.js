import { Axios } from "./Axios";

export const PostLogout = async () => {
  try {
    const response = await Axios.post(`/api/v1/auth/logout`);
    console.log(response);
    return response.data.code;
  } catch (error) {
    return error;
  }
};
