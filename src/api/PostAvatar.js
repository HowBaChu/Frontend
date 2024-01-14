import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const PostAvatar = (formData) => {
  Axios.post(`/api/v1/member/avatar`, formData, {
    headers: {
      Authorization: `${ACCESS_TOKEN}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
    })
    .catch((error) => {
      console.log(error);
    });
};
