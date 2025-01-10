import React, { MouseEvent, useEffect } from "react";
import { Link } from "@/i18n/routing";
const hoodi = "/photo_2024-12-21_10-48-06.jpg";

interface ProfileModalProps {
  onDestroy?: (event: MouseEvent<HTMLElement>) => void;
  clothesImg?: string;
  title: string;
  size: string;
}

const SideBarShoppingBag: React.FC<ProfileModalProps> = ({
  title,
  size,
  onDestroy,
  clothesImg,
}) => {
  const closeWnd = (event: MouseEvent<HTMLElement>) => {
    if (
      event.target === event.currentTarget &&
      event.currentTarget.dataset.closeable
    ) {
      onDestroy?.(event);
    } else if ((event.target as HTMLElement).closest("button")) {
      event.stopPropagation();
      onDestroy?.(event);
    }
  };

  // Disable page scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = ""; // Enable scrolling when unmounted
    };
  }, []);

  return (
    <div
      onClick={closeWnd}
      className="fixed top-0 right-0 w-full h-full bg-modalBgEntyre"
      data-closeable="true"
    >
      <div
        className="fixed gap-y-2 bg-modalBg px-4 py-2 flex flex-col items-center
          w-full bottom-0 h-[65%] md:w-2/6 md:right-0 md:h-full
          border-t-2 md:border-t-0 md:border-l-2 border-link
          overflow-y-auto" // Enable scrolling within the sidebar
      >
        <div className="flex w-full justify-end">
          <button type="button" onClick={closeWnd} data-closeable="true">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="zds-dialog-icon-button__icon zds-dialog-close-button__icon"
            >
              <path
                d="M12.0001 12.7071L18.8465 19.5535L19.5536 18.8464L12.7072 12L19.5536 5.15352L18.8465 4.44641L12.0001 11.2929L5.15364 4.44641L4.44653 5.15352L11.293 12L4.44653 18.8464L5.15364 19.5535L12.0001 12.7071Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex w-full justify-start">
          <h2 className="text-1xl">ADDED TO YOUR BASKET</h2>
        </div>

        <div className="w-full gap-y-2">
          <div className="flex border border-cartBorder">
            <div className=" min-w-32 ">
              <img
                className="h-full w-32 border border-cartBorder sm:h-56 md:h-64 lg:h-60  object-cover aspect-[3/4]"
                src={hoodi}
                alt=""
              />
            </div>
            <div className="flex flex-wrap flex-col items-start pl-2 pt-2 gap-2">
              <span>Title: {title}</span>
              <span>Size: {size}</span>
            </div>
          </div>
        </div>

        <div className="w-full border border-cartBorder">
          <Link href={"/cart"}>SEE SHOPPING BASKET</Link>
        </div>

        <div className="flex justify-start mt-10  w-full ">
          <h1>YOU MAY BE INTERESTED IN</h1>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1">
          <h3>cart's</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBarShoppingBag;
