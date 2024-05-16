import { useMutation } from "react-query";
import { postLogin } from "../api/auth";

export const useLogin = () => useMutation((body) => postLogin(body));
