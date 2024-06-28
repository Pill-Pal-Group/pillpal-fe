import { axiosClient } from "../utils/axios";

export const getCategoryList = async () => {
  const res = await axiosClient.get("/api/categories");
  return res.data;
};

export const getCategoryById = async (id) => {
  const res = await axiosClient.get(`/api/categories/${id}`);
  return res.data;
};

export const postCreateCategory = async (data) => {
  const res = await axiosClient.post("/api/categories", data);
  return res.data;
};

export const putUpdateCategory = async (id, data) => {
  const res = await axiosClient.put(`/api/categories/${id}`, data);
  return res.data;
};

export const deleteCategory = async (id) => {
  const res = await axiosClient.delete(`/api/categories/${id}`);
  return res.data;
};
