"use client";
import { useState } from "react";
import SideBarShoppingBag from "@/components/Modal/SideBarShoppingBag/page";

const hoodi = "/photo_2024-12-30_14-34-34.jpg";
const cart = "/shopping-cart-solid-svgrepo-com.svg";

export default function Cart({
  title,
  price,
  size,
  img,
}: {
  title: string;
  price: number;
  img?: string;
  size: string;
}) {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md bg-white border border-cartBorder  shadow dark:bg-headerBg dark:cartBorder">
      <a href="#" className="flex items-center justify-center pt-1 px-1">
        <img
          className="h-80 sm:h-56 md:h-64 lg:h-96 object-cover aspect-[3/4]"
          src={hoodi}
          alt="product image"
        />
      </a>
      <div className="px-1 py-3">
        <h5 className="pl-1.5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5 className="pl-1.5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-tight text-gray-100 dark:text-gray-400">
          {size}
        </h5>
        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white pl-1.5">
            {price}
          </span>

          <div
            className="text-white bg-link hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-950 font-medium rounded-lg m-2  ml-4 text-center dark:bg-link dark:hover:bg-link dark:focus:ring-modalBg"
            onClick={() => setModalState(true)}
          >
            <a href="#">
              <img
                src={cart}
                className="w-10 rounded-t-lg object-cover aspect-[1/1] "
                alt="cart"
              />
            </a>
            {modalState && (
              <SideBarShoppingBag
                title={title}
                size={size}
                clothesImg={hoodi}
                onDestroy={(event) => {
                  event.stopPropagation();
                  setModalState(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
