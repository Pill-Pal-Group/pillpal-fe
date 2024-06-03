import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://pp-devtest2.azurewebsites.net/api",
});

// axiosClient.interceptors.response.use(
//   (response) => {
//     if (response && response.data) return response.data;
//     return response;
//   },
//   (err) => {
//     if (!err.response) {
//       return alert(err);    
//     }
//     throw err.response.data;
//   }
// );

export { axiosClient };
