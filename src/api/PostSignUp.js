import { Axios } from "./Axios";

export const PostSignUp = (formData) => {
  Axios.post(`/api/v1/auth/signup`, {
    email: formData.email,
    mbti: formData.mbti,
    password: formData.password,
    statusMessage: formData.statusMessage,
    username: formData.username,
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
};
