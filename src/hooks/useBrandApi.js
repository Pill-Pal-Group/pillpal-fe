import { useMutation, useQuery } from "react-query";
import { getBrandById, getBrandList, postCreateBrand } from "../api/brand";

export const useGetBrandList = () =>
  useQuery("getBrandList", () => getBrandList());

export const useCreateBrand = () =>
  useMutation((body) => postCreateBrand(body));

export const useGetBrandById = (id) =>
  useQuery(["getBrandById", id], () => getBrandById(id));
