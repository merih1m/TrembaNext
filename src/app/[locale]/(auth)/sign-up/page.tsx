import RegisterForm from "./components/RegisterForm";
import { Link } from "@/i18n/routing";
import LoginGithub from "@/components/Buttons/LoginGithub";
import LoginGoogle from "@/components/Buttons/LoginGoogle";

export default function SignUpPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center  ">
      <div className="p-10 border border-amber-50 rounded-lg shadow-lg w-full sm:w-3/4 lg:w-auto">
        <h1 className="text-4xl font-semibold text-center text-gray-50">
          Register
        </h1>
        <hr className="my-5" />
        <RegisterForm />
        <div className="text-sm text-center text-neutral-300 mt-5">
          Have an accout?
          <Link href={"/sign-in"} className="font-bold text-neutral-200">
            Login
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
