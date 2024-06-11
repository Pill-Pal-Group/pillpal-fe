import { axiosClient } from "../utils/axios";

export const getBrandList = async () => {
  const res = await axiosClient.get("/api/brands");
  return res.data;
};
