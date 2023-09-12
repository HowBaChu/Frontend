import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const PatchProfileDetail = (formdata) => {
  Axios.patch(`/api/v1/member`, formdata, {
    headers: {
      Authorization: `${ACCESS_TOKEN}`,
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
