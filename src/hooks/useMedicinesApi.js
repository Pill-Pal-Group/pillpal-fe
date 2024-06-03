import { useQuery } from "react-query";
import { getMedicines } from "../api/medicines";

export const useMedicinesApi = () => {
    return useQuery("medicines", getMedicines);
}