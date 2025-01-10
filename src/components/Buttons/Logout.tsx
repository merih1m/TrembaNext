"use client";

import { logout } from "../../../action/auth";

const Logout = () => {
  return (
    <div
      onClick={() => logout()}
      className="bg-modalBg text-white text-sm px-4 py-2 rounded-md cursor-pointer"
    >
      Logout
    </div>
  );
};
export default Logout;
