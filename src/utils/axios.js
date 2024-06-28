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

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export { axiosClient };
