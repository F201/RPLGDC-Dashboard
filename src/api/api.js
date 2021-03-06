import axios from "axios";
import recruitment from "./recruitment";

const TIMEOUT = 90000;
export const ApiGeneral = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: TIMEOUT
});

export default {
  recruitment
};
