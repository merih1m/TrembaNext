"use client";
import { useState, useMemo } from "react";
import { useSession } from "next-auth/react";

import ProfileModal from "../../../Modal/ProfileModal/ProfileModal";
const defaultUserIcon = "/user.webp";

export default function Profile() {
  const [modalState, setModalState] = useState(false);
  const { data: session, status } = useSession();

  const profileImg = useMemo(() => {
    if (status === "authenticated") {
      // @ts-ignore
      return session?.user?.image || defaultUserIcon;
    }
    return defaultUserIcon;
  }, [session, status]);

  const username = useMemo(() => {
    if (status === "authenticated") {
      // @ts-ignore
      return session?.user?.name || "nickname";
    }
    return "nickname";
  }, [session, status]);

  return (
    <div className="profile" onClick={() => setModalState(true)}>
      <img src={profileImg} alt="user" className="w-12 h-12 rounded-full" />
      <div className="circle"></div>
      {modalState && (
        <ProfileModal
          username={username}
          profileImg={profileImg}
          onDestroy={(event) => {
            event.stopPropagation();
            setModalState(false);
          }}
        />
      )}
    </div>
  );
}
