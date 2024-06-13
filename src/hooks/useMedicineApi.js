import { useQuery } from "react-query";
import { getListMedicine, getMedicine } from "../api/medicine";

export const useGetListMedicine = () =>
  useQuery("getListMedicine", () => getListMedicine(), {
    refetchOnWindowFocus: false,
  });

export const useGetMedicine = (id) =>
  useQuery(["getMedicine", id], () => getMedicine(id), {
    refetchOnWindowFocus: false,
    enabled: Boolean(id),
  });
