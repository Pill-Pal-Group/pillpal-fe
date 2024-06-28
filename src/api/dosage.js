import { axiosClient } from "../utils/axios";

export const getDosageList = async () => {
  const res = await axiosClient.get("/api/dosage-forms");
  return res.data;
};

export const postCreateDosage = async (body) => {
  const res = await axiosClient.post("/api/dosage-forms", body);
  return res.data;
};

export const getDosageById = async (id) => {
  const res = await axiosClient.get(`/api/dosage-forms/${id}`);
  return res.data;
};

export const deleteDosage = async (id) => {
  const res = await axiosClient.delete(`/api/dosage-forms/${id}`);
  return res.data;
};

export const updateDosage = async (id, body) => {
  const res = await axiosClient.put(`/api/dosage-forms/${id}`, body);
  return res.data;
};
