import { axiosClient } from "../utils/axios";

export const getBrandList = async () => {
  const res = await axiosClient.get("/api/brands");
  return res.data;
};

export const postCreateBrand = async (body) => {
  const res = await axiosClient.post("/api/brands", body);
  return res.data;
};

export const getBrandById = async (id) => {
  const res = await axiosClient.get(`/api/brands/${id}`);
  return res.data;
};
