import { useMutation, useQuery } from "react-query";
import {
  deletePharmaceutical,
  getPharmaceuticalById,
  getPharmaceuticalList,
  postCreatePharmaceutical,
  putUpdatePharmaceutical,
} from "../api/pharmaceutical";

export const useGetPharmaceuticalList = () =>
  useQuery(["getPharmaceuticalList"], () => getPharmaceuticalList());

export const useGetPharmaceuticalById = (id) =>
  useQuery(["getPharmaceuticalById", id], () => getPharmaceuticalById(id));

export const useCreatePharmaceutical = () =>
  useMutation((body) => postCreatePharmaceutical(body));

export const useUpdatePharmaceutical = (id) =>
  useMutation((body) => putUpdatePharmaceutical(id, body));

export const useDeletePharmaceutical = (id) =>
  useMutation(() => deletePharmaceutical(id));
