import { Axios } from "./Axios";

export const PostLogIn = (formData) => {
  Axios.post(`/api/v1/auth/login`, {
    email: formData.email,
    password: formData.password,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
