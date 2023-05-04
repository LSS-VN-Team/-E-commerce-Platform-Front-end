import { MyCart } from "./interface";
import { axiosRequest } from "@/utils/axiosRequest";
const factories = {
  getItem: (data: MyCart) => {
    const id = localStorage.getItem("_id");
    // debugger
    return axiosRequest({
      method: "get",
      url: ``,
      data: data,
    });
  },
  removeItem: (id: string) => {
    return axiosRequest({
      method: "delete",
      url: ``,
    });
  },
};
export default factories;
