import { Axios } from "./Axios";

export const GetReport = (callbackFunctions) => {
  Axios.get(`/api/v1/report`)
    .then((res) => {
      callbackFunctions(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
