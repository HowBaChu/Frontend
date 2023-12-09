import { Axios } from "./Axios";

export const PostSignUp = async (formData) => {
  try {
    const response = await Axios.post(`/api/v1/auth/signup`, {
      email: formData.email,
      mbti: formData.mbti,
      password: formData.password,
      statusMessage: formData.statusMessage,
      username: formData.username,
    });
    return response.data;
  } catch (error){
    return (error);
  }
};
