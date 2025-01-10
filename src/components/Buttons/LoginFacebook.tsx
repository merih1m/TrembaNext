import { FaFacebook } from "react-icons/fa";

const LoginFacebook = () => {
  return (
    <div className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-facebook rounded-md p-4 flex items-center justify-center ">
      <FaFacebook className="w-8 h-8 text-white" />
      <p className="text-white">Sign in with Facebook</p>
    </div>
  );
};
export default LoginFacebook;
