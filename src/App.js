import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { LoginScreen } from "./pageHandlers/LoginHandler";
import { UserScreen } from "./pageHandlers/UserHandler";
import React, { useContext } from "react";
import { ElementContextPopUp } from "./context/PopUpContext";
import { PopUpPrefab } from "./components/PopUpPrefab";
function App() {
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

  const { value } = useContext(ElementContextPopUp);
  console.log(value);
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="" element={<LoginScreen />} />
            <Route path="Profile" element={<UserScreen />} />
          </Routes>
        </Router>
        {value !== true ? null : <PopUpPrefab mobile={isMobile}></PopUpPrefab>}
      </div>
    </>
  );
}

export default App;
