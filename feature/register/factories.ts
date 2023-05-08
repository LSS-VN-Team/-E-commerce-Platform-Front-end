import axios from "axios";
import { IRegister } from "@/interfaces";

const url = process.env.REACT_APP_BACKEND_URL;

const factories = {
  Register: (data: IRegister) => {
    return axios({
      method: "post",
      url: `${url}auth/sign-up`,
      data: data,
    });
  },
};

export default factories;