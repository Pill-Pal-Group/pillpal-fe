import { axiosClient } from "../utils/axios";

export const getActiveIngredientList = async () => {
  const res = await axiosClient.get("/api/active-ingredients");
  return res.data;
};

export const getActiveIngredientById = async (id) => {
  const res = await axiosClient.get(`/api/active-ingredients/${id}`);
  return res.data;
};

export const postCreateActiveIngredient = async (data) => {
  const res = await axiosClient.post("/api/active-ingredients", data);
  return res.data;
};

export const putUpdateActiveIngredient = async (id, data) => {
  const res = await axiosClient.put(`/api/active-ingredients/${id}`, data);
  return res.data;
};

export const deleteActiveIngredient = async (id) => {
  const res = await axiosClient.delete(`/api/active-ingredients/${id}`);
  return res.data;
};
