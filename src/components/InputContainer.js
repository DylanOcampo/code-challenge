import { useState } from "react";
import Form from "react-bootstrap/Form";
import React, { useContext } from "react";
import { ElementContext } from "../context/UserContext";
import { ElementContextPopUp } from "../context/PopUpContext";
import { useNavigate } from "react-router-dom";

export const InputContainer = () => {
  const navigate = useNavigate();
  const { changeValue } = useContext(ElementContext);
  const { changeValuePopUP } = useContext(ElementContextPopUp);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const url = `http://localhost:5000/auth/${loginInfo.email}/${loginInfo.password}`;
  const fetchData = async () => {
    const result = await fetch(url, { mode: "cors" });
    const json = await result.json();
    if (json !== null) {
      changeValue(json);
      setLoginInfo("");
      navigate("/Profile");
    } else {
      changeValuePopUP(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = async () => {
    fetchData();
  };
  return (
    <div className="InputContainer">
      <div>
        <h1 className="titleText">Welcome</h1>
        <h2 style={{ fontSize: "3vh" }}>
          Login in to your account to continue
        </h2>
      </div>
      <div style={{ width: "100%" }}>
        <div>
          <h1 style={{ fontSize: "4vh" }}>Email</h1>
          <Form.Control
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            size="lg"
            type="email"
            style={{
              borderColor: "rgb(187, 187, 187)",
              borderRadius: "100px",
              backgroundColor: "rgba(127, 119, 240, 0.138)",
            }}
          />
        </div>
        <div>
          <h1 style={{ fontSize: "4vh" }}>Password</h1>
          <Form.Control
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            size="lg"
            type="password"
            style={{
              borderColor: "rgb(187, 187, 187)",
              borderRadius: "100px",
              backgroundColor: "rgba(127, 119, 240, 0.138)",
            }}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <button className="styleButton" onClick={() => handleClick()}>
          <h1 style={{ color: "white", fontSize: "4vh" }}>LOGIN</h1>
        </button>
      </div>
    </div>
  );
};
