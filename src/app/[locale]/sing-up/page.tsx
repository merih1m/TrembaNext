import LoginGithub from "../../../components/Buttons/LoginGithub";
import LoginGoogle from "../../../components/Buttons/LoginGoogle";
import LoginFacebook from "../../../components/Buttons/LoginFacebook";
import Logout from "../../../components/Buttons/Logout";

export default function about() {
  return (
    <div>
      <h1>sing-up</h1>

      <div className="w-96">
        <LoginGithub />
        <LoginGoogle />
        <LoginFacebook />
      </div>
      <div className="w-96">
        <Logout />
      </div>
    </div>
  );
}
