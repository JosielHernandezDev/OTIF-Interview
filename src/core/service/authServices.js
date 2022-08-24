import { AxiosContext as Axios } from "./axios";

export const loginService = (body) => {
  return Axios.post(`/access/signin`, body);
};

export const AccessService=()=>{
  return Axios.get(`/access`);
}