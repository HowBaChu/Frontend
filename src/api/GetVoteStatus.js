import { Axios } from "./Axios";

export const GetVoteStatus = () => {
  Axios.get(`/api/v1/vote`)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
