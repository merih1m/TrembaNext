"use client";
import { FcGoogle } from "react-icons/fc";
import { login } from "../../../action/auth";

const LoginGoogle = () => {
  return (
    <div
      onClick={() => login("google")}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-google rounded-md p-4 flex items-center justify-center"
    >
      <FcGoogle className="w-9 h-9 fill-white " />
      <p className="text-white">Sign in with Google</p>
    </div>
  );
};

export default LoginGoogle;
