import { MyDashBoard} from "./interface";
import { axiosRequest } from "@/utils/axiosRequest";
const factories = {
  getItem: (data: MyDashBoard) => {
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
