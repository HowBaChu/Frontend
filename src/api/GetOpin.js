import { Axios } from "./Axios";

export const GetOpin = (callbackFunctions, opinId) => {
  Axios.get(`/api/v1/opin/${opinId ? opinId : ""}`)
    .then((res) => {
      callbackFunctions(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
