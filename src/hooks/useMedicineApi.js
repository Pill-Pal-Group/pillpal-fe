import { useQuery } from "react-query";
import { getListMedicine, getMedicine } from "../api/medicine";

export const useGetListMedicine = () =>
  useQuery("getListMedicine", () => getListMedicine());

export const useGetMedicine = (id) =>
  useQuery(["getMedicine", id], () => getMedicine(id));
