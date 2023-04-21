import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });
const products = [
  {
    name: "Product 1",
    price: "$10.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3204",
  },
  {
    name: "Product 2",
    price: "$19.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3204",
  },
  {
    name: "Product 3",
    price: "$7.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3204",
  },
];

const fashionProducts = [
  {
    name: "Fashion Product 1",
    price: "$12.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3207",
  },
  {
    name: "Fashion Product 2",
    price: "$22.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3207",
  },
  {
    name: "Fashion Product 3",
    price: "$8.99",
    imageUrl: "https://mabustudio.com/?attachment_id=3207",
  },
];

export default function Home() {
  return (
    <>
      <div className="bg-white h-screen w-screen overflow-x-hidden">
        <div className=" h-full w-full">
          <Header />
        </div>
        <div className="h-fit w-full my-20 bg-white justify-center  text-center ">
          <p className="text-slate-950 my-10 uppercase font-bold text-xl">
            Man & Woman Fashion
          </p>
          <div className="flex items-center justify-center">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-52 h-64 object-cover mx-10 shadow-lg"
                />
                <h3 className="text-gray-800 font-medium mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-fit w-full my-20 bg-white justify-center  text-center ">
          <p className="text-slate-950 my-10 uppercase font-bold text-xl">
            outstanding clothes
          </p>
          <div className="flex items-center justify-center">
            {fashionProducts.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-52 h-64 object-cover mx-10 shadow-lg"
                />
                <h3 className="text-gray-800 font-medium mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" w-full h-1/6 bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
