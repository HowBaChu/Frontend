import { Axios } from "./Axios";

export const GetProfileDetail = (callbackFunctions) => {
  Axios.get(`/api/v1/member`)
    .then((res) => {
      callbackFunctions(res.data.data);
      return res.data.data;
    })
    .catch((errors) => {
      console.log(errors);
    });
};
