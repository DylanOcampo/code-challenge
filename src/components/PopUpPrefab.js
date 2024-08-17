import { ElementContextPopUp } from "../context/PopUpContext";
import React, { useContext } from "react";
import { FloatingOverlay } from "@floating-ui/react";
import { useNavigate } from "react-router-dom";

export const PopUpPrefab = ({ mobile, critical }) => {
  const { changeValuePopUP } = useContext(ElementContextPopUp);
  const navigate = useNavigate();
  const handleInputChange = () => {
    if (critical) {
      navigate("/");
    } else {
      changeValuePopUP(false);
    }
  };

  if (mobile) {
    return (
      <FloatingOverlay style={{ left: "10%", top: "40%" }}>
        <div className="popUpContainer">
          <h1 style={{ paddingTop: "3%" }}>Error</h1>
          <h3 style={{ paddingBottom: "1%" }}>Please Try Again</h3>
          <button
            className="styleButtonMobile"
            onClick={() => {
              handleInputChange();
            }}
          >
            Okey
          </button>
        </div>
      </FloatingOverlay>
    );
  }

  return (
    <FloatingOverlay style={{ left: "30%", top: "40%" }}>
      <div className="popUpContainerDesktop">
        <h1 style={{ paddingTop: "3%", paddingBottom: "1%" }}>Error</h1>
        <h3 style={{ paddingBottom: "3%" }}>Please Try Again</h3>
        <button
          className="styleButtonPopUpDesktop"
          onClick={() => {
            handleInputChange();
          }}
        >
          <h1 style={{ color: "white" }}>Okey</h1>
        </button>
      </div>
    </FloatingOverlay>
  );
};
