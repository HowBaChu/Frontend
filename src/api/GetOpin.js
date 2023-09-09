import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const GetOpin = () => {
  Axios.get(`/api/v1/opin`, {
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
