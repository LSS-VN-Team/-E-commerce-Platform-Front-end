import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { BsListNested } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import Link from 'next/link';
import React from "react";

const images: string[] = [
  "https://static.zara.net/photos///contents/mkt/spots/ss23-join-life-innovation-circ/subhome-xmedia-woman//w/1920/IMAGE-landscape-fill-04338e94-d75c-4eda-b00e-fbd4893c82f3-default_0.jpg?ts=1681388797279",
  "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-accesories/subhome-xmedia-16//w/1920/IMAGE-landscape-fill-0ebcfa4f-36d5-4578-9535-e33e7bfdaee7-default_0.jpg?ts=1681470617641",
  "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-16-2//w/1920/IMAGE-landscape-fill-ecc819d2-4833-4b34-a4b8-40d9442ff4a8-default_0.jpg?ts=1681713698198",
  "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-shoes-bags/subhome-xmedia-16//w/1920/IMAGE-landscape-default-fill-25252fdc-f566-4eb5-a761-bd607045abe7-default_0.jpg?ts=1681471149544",
  "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-new/subhome-xmedia-16-3//w/1920/IMAGE-landscape-fill-e3f9f5d6-adfa-47cb-8673-03df696d18bc-default_0.jpg?ts=1681720007347",
  "https://static.zara.net/photos///contents/mkt/spots/ss23-north-woman-perfumes/subhome-xmedia-16//w/1920/IMAGE-landscape-fill-ffff6517-08ab-4eac-b54c-fa6ff3f33371-default_0.jpg?ts=1681914918670",
];

const items = [
  { title: "Shirt", link: "#" },
  { title: "Pants", link: "#" },
  { title: "Fashion Accessories", link: "#" },
  { title: "Perfume", link: "#" },
];

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  //slide
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  //dropdown
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  //cart
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  // const token = localStorage.getItem("token");


  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="z-10 uppercase text-white fixed font-extralight top-0 left-1/4 w-1/2 rounded-b-full h-10 bg-slate-800 flex items-center justify-center shadow-xl">
        <span
          onClick={() => window.location.reload()}
          className="ml-9 cursor-pointer "
        >
          Home
        </span>
        <div className="ml-9 ">Brand</div>
        <div className="ml-9">Sales</div>
        <div className="ml-9">Collection</div>
        <div className="ml-auto mr-9 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white pl-2 pr-1 py-1  focus:outline-none  focus:border-white focus:border-b "
          />
        </div>
      </div>
      <div className="relative">
        <button
          className="fixed top-9 left-9 text-black text-2xl"
          onClick={handleDropdownClick}
        >
          {showDropdown ? <AiOutlineClose /> : <BsListNested />}
        </button>

        {showDropdown && (
          <div className="fixed top-16 left-8 z-10 w-72 bg-white border border-gray-200  shadow-lg">
            <ul className="py-2">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
  {/* {token ? (
    <button className="fixed top-9 right-32 text-black font-light uppercase">
      TAN
    </button>
  ) : ( */}
    <Link href="/login" className="fixed top-9 right-32 text-black font-light uppercase">
      log in
    </Link>
  {/* )} */}
</div>
      <div className="relative">
        <button
          className="fixed top-9 right-16 text-black text-2xl"
          onClick={handleCartClick}
        >
          <FaOpencart />
        </button>
        {showCart && (
          <div className="fixed top-16 right-8 z-10 w-72 bg-white border border-gray-200 shadow-lg">
            <ul className="py-2">
              {cartItems.length === 0 ? (
                <li className="px-4 py-2 text-gray-800">No items in cart</li>
              ) : (
                cartItems.map((item, index) => (
                  <li key={index} className="px-4 py-2 text-gray-800">
                    {/* {item.title} - {item.price} */}
                  </li>
                ))
              )}
            </ul>
            <button
              className="block mx-auto my-4 px-4 py-2 bg-gray-800 text-white rounded-md"
              onClick={() => (window.location.href = "/cart")}
            >
              Go to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
