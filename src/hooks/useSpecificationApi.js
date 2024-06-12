import { useMutation, useQuery } from "react-query";
import {
  deleteSpecification,
  getSpecificationById,
  getSpecificationList,
  postCreateSpecification,
  putUpdateSpecification,
} from "../api/specification";

export const useGetSpecificationList = () =>
  useQuery("getSpecificationList", () => getSpecificationList());

export const useGetSpecificationById = (id) =>
  useQuery(["getSpecificationById", id], () => getSpecificationById(id));

export const useCreateSpecification = () =>
  useMutation((body) => postCreateSpecification(body));

export const useUpdateSpecification = (id) =>
  useMutation((body) => putUpdateSpecification(id, body));

export const useDeleteSpecification = (id) =>
  useMutation(() => deleteSpecification(id));
