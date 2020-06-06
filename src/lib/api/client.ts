import axios from "axios";
import env from "../env";
import { getToken } from "../token";

interface getClientOptions {
  auth?: boolean;
}
function getClient(options?: getClientOptions) {
  return axios.create({
    baseURL: env.REACT_APP_API,
    headers: {
      Authorization: options?.auth && getToken(),
    },
  });
}

export default getClient;
