"use client";
import { FaGithub } from "react-icons/fa";
import { login } from "../../../action/auth";

const LoginGithub = () => {
  return (
    <div
      onClick={() => login("github")}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-modalBg rounded-md p-4 flex items-center justify-center"
    >
      <FaGithub className="w-8 h-8 text-white" />
      <p className="text-white">Sign in with Github</p>
    </div>
  );
};

export default LoginGithub;
