import LoginGithub from "../../../../components/Buttons/LoginGithub";
import LoginGoogle from "../../../../components/Buttons/LoginGoogle";
import LoginForm from "./component/LoginForm";
import { Link } from "@/i18n/routing";

export default function SingIn() {
  return (
    <div className="h-screen  w-full flex items-center justify-center ">
      <div className="p-10 border border-amber-50 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-50 ">
          Login
        </h1>
        <hr className="my-5" />
        <LoginForm />
        <div className="text-sm text-center text-neutral-300 mt-5">
          Not have an accout?{" "}
          <Link href={"/sign-up"} className="font-bold text-neutral-200 ">
            Register
          </Link>
        </div>
        <div className="flex-col">
          <LoginGithub />
          <LoginGoogle />
        </div>
      </div>
    </div>
  );
}
