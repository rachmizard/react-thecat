import axios from "axios";
import environment from "./../environment/env.local";

const instance = axios.create({
  baseURL: environment.apiHost,
  params: {
    sub_id: environment.subId,
  },
});

instance.defaults.headers.common["x-api-key"] = environment.apiKey;

export default instance;
