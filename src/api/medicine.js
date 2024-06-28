import { axiosClient } from "../utils/axios";

export const getListMedicine = async () => {
  const res = await axiosClient.get("/api/medicines");
  return res.data;
};

export const getMedicine = async (id) => {
  const res = await axiosClient.get(`/api/medicines/${id}`);
  return res.data;
};
