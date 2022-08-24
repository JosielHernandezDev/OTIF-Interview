import Axios from "axios";
import { OTIF_API } from "../constants/enviroment";
import { interceptor } from "../helpers/httpInterceptor";

const AxiosContext = Axios.create({
  baseURL: OTIF_API,
  timeout: 20000,
});

AxiosContext.defaults.insecureHTTPParser = true;

AxiosContext.interceptors = interceptor(AxiosContext);

export { AxiosContext };
