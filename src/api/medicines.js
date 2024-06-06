import { axiosClient } from "../utils/axios";

export const getMedicines = async () => {
    const res = await axiosClient.get(`/medicines`);
    return res;
}
export const getMedicineById = async (id) => {
    const res = await axiosClient.get(`/medicines/${id}`);
    return res;
}