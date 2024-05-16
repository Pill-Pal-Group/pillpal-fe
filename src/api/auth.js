import { axiosClient } from "../utils/axios";

export const postLogin = async (body) => {
  const res = await axiosClient.post(`/login`, body);
  return res;
};
