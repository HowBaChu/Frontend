import { Axios } from "./Axios";

export const PostReport = (reportData) => {
  Axios.post(`/api/v1/report`,
    reportData,
  )
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((errors) => {
      console.log(errors);
    });
};
