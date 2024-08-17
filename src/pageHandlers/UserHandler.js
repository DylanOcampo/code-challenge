import { useState, useEffect } from "react";
import { UserMobile } from "../pages/UserMobile";
import { UserDesktop } from "../pages/UserDesktop";
import { ElementContext } from "../context/UserContext";
import React, { useContext } from "react";
import { PopUpPrefab } from "../components/PopUpPrefab";

export const UserScreen = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);
  const { value } = useContext(ElementContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(value);

  if (value !== null && value !== 0) {
    return (
      <div>
        {isMobile ? (
          <UserMobile _value={value} />
        ) : (
          <UserDesktop _value={value} />
        )}
      </div>
    );
  } else {
    return (
      <div>
        <PopUpPrefab critical={true}></PopUpPrefab>
      </div>
    );
  }
};
