import { useQuery } from "react-query";
import { getMedicines,getMedicineById } from "../api/medicines";

export const useMedicinesApi = () => {
    return useQuery("medicines", getMedicines);
}

export const useMedicineId = (id) => {
    return useQuery(["medicines", id], () => getMedicineById(id));
}