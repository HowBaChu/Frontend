import { Axios } from "./Axios";

export const PostCheckPwd = async (password) => {
  try {
    const response = await Axios.post("/api/v1/member/password-verification", {
      password: password,
    });
    return response.data.responseCode;
  } catch (error) {
    return error.response.data.message;
  }
};
