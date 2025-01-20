"use client";
import { ReactNode } from "react";
import { Link } from "@/i18n/routing";

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center z-99 grow flex-col">
      <div className="flex items-center h-full flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full h-full lg:w-1/2">
          <img
            className="hidden lg:block"
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt=""
          />
        </div>
        <div className="w-full h-full gap-16 lg:w-1/2">
          <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-600">
            {title}
          </h1>
          <p className="py-4 text-base text-gray-600">
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </p>
          <p className="py-2 text-base text-gray-600">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </p>
          <Link
            href="/"
            className="block w-full  lg:w-auto my-4 border rounded-md px-6 py-4 bg-indigo-600 text-white text-center hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Go back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
