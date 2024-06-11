import { useQuery } from "react-query";
import { getBrandList } from "../api/brand";

export const useGetBrandList = () =>
  useQuery("getBrandList", () => getBrandList());
