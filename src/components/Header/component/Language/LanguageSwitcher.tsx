"use client";

import { useEffect, useState } from "react";

const uaFlag = "/image 4.svg";
const usFlag = "/united-states-flag-icon.svg";

const LanguageSwitcher = () => {
  const [currentFlag, setCurrentFlag] = useState(usFlag);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setCurrentFlag(path.startsWith("/en") ? usFlag : uaFlag);
    }
  }, []);

  function toggleLanguage() {
    const path = window.location.pathname;
    const newPath = path.startsWith("/en")
      ? path.replace("/en", "/ua")
      : path.replace("/ua", "/en");
    window.history.replaceState({}, "", `${window.location.origin}${newPath}`);
    window.location.reload();
  }

  return (
    <div className="flex items-center">
      <button onClick={toggleLanguage} className="flex items-center">
        <img
          src={currentFlag}
          alt="Flag"
          className="flex justify-center items-center align-middle w-10 h-10 object-contain"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
