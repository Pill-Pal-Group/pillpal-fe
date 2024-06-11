import { useMutation, useQuery } from "react-query";
import { getBrandList, postCreateBrand } from "../api/brand";

export const useGetBrandList = () =>
  useQuery("getBrandList", () => getBrandList());

export const useCreateBrand = () =>
  useMutation((body) => postCreateBrand(body));
