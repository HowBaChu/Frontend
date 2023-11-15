import { Axios } from "./Axios";

export const PostOpin = (opinData) => {
  Axios.post(`/api/v1/opin`, {
    content: opinData,
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
