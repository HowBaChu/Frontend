import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const GetProfileDetail = (callbackFunctions) => {
  Axios.get(`/api/v1/member`, {
    headers: {
      Authorization: `${ACCESS_TOKEN}`,
    },
  })
    .then((res) => {
      callbackFunctions(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
