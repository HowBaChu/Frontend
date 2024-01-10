import { Axios } from "./Axios";

export const PostLogIn = async (formData) => {
  try {
    const response = await Axios.post(`/api/v1/auth/login`, {
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  } catch (error) {
    return (error);
  }
};
