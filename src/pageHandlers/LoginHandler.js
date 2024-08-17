import { useState, useEffect } from "react";
import { LoginDesktop } from "../pages/LoginDesktop";
import { LoginMobile } from "../pages/LoginMobile";

export const LoginScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <LoginMobile /> : <LoginDesktop />}</div>;
};
