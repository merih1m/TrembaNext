"use client";
import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";

import ProfileModal from "../../../Modal/ProfileModal/ProfileModal";
const defaultUserIcon = "/user.webp";

export default function Profile() {
  const [modalState, setModalState] = useState(false);
  const { data: session, status } = useSession();

  const profileData = useMemo(() => {
    if (status === "authenticated") {
      return {
        profileImg: session?.user?.image || defaultUserIcon,
        username: session?.user?.name || "User",
      };
    }
    return {
      profileImg: defaultUserIcon,
      username: "Guest",
    };
  }, [session, status]);

  return (
    <div className="profile" onClick={() => setModalState(true)}>
      <img
        src={profileData.profileImg}
        alt="user"
        className="w-12 h-12 rounded-full"
      />
      <div className="circle"></div>
      {modalState && (
        <ProfileModal
          username={profileData.username}
          profileImg={profileData.profileImg}
          onDestroy={(event) => {
            event.stopPropagation();
            setModalState(false);
          }}
        />
      )}
    </div>
  );
}
