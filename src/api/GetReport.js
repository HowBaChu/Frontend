import { Axios } from "./Axios";

const ACCESS_TOKEN = process.env.REACT_APP_TOKEN;

export const GetReport = (callbackFunctions) => {
  Axios.get(`/v1/api/report`, {
    headers: {
      Authorization: `${ACCESS_TOKEN}`,
    },
  })
    .then((res) => {
      callbackFunctions(res.data.data);
      console.log(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
