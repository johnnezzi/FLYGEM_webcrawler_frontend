import axios from "axios";

const BASE_URL = "something";

export const postUrl = url => {
  return axios
    .post(`${BASE_URL}/`, {
      url
    })
    .then(res => console.log(res.data))
    .catch(console.log);
};
