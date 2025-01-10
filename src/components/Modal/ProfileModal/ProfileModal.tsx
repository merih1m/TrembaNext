import React, { MouseEvent } from "react";

import Nav from "../../Header/component/Nav/Nav";
import { navLinks } from "../../Header/component/Nav/navLinks";

interface ProfileModalProps {
  onDestroy?: (event: MouseEvent<HTMLDivElement>) => void;
  profileImg?: string;
  username?: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  onDestroy,
  profileImg,
  username,
}) => {
  const closeWnd = (event: MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.dataset.closeable) {
      onDestroy?.(event);
    }
  };

  return (
    <div
      onClick={closeWnd}
      className="fixed top-0 right-0 w-full h-full bg-modalBgEntyre"
      data-closeable="true"
    >
      <div className="fixed top-[22%] right-[-2.8%] transform -translate-x-1/2 -translate-y-1/2 bg-modalBg px-4 py-2 rounded-lg flex flex-col items-center">
        <div>
          <img
            src={profileImg}
            className="w-12 h-12 rounded-full"
            alt="Profile"
          />
        </div>
        <div>
          <span>{username}</span>
        </div>
        <div
          className="h-[2px] w-full bg-link drop-shadow-customBottom mx-auto"
          style={{ filter: "drop-shadow(0 10px 5px #610094)" }}
        />
        <Nav
          text={navLinks.map((text) => text.text)}
          link={navLinks.map((link) => link.link)}
          className="flex flex-col justify-center items-center gap-x-5"
        />
      </div>
    </div>
  );
};

export default ProfileModal;
