import { Axios } from "./Axios";

export const GetTopic = (callbackFunctions) => {
  Axios.get(`/api/v1/topic`)
    .then((res) => {
      callbackFunctions(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
