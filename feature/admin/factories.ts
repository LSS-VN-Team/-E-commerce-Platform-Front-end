import { Chart, NewFeed, Product} from "./interface";
import { axiosRequest } from "@/utils/axiosRequest";
const factories = {
  getItemChart: (data: Chart) => {
    // debugger
    return axiosRequest({
      method: "get",
      url: ``,
      data: data,
    });
  },
  getItemNewFeed: (data: NewFeed) => {
    // debugger
    return axiosRequest({
      method: "get",
      url: ``,
      data: data,
    });
  },
  getItemProduct: (data: Product) => {
    // debugger
    return axiosRequest({
      method: "get",
      url: ``,
      data: data,
    });
  },
  
};
export default factories;
