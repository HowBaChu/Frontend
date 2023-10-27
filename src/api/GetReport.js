import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const GetReport = (callbackFunctions) => {
  Axios.get(`/api/v1/report`, {
    headers: {
      Authorization: `${ACCESS_TOKEN}`,
    },
  })
    .then((res) => {
      callbackFunctions(res.data.data);
      console.log(res.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
