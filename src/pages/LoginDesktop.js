import logo from "../assets/logo.png";
import { Col } from "react-bootstrap";
import { InputContainer } from "../components/InputContainer";

export const LoginDesktop = () => {
  return (
    <div className="loginBackground">
      <Col className="colCenter">
        <img src={logo} className="logo"></img>
      </Col>
      <Col>
        <InputContainer></InputContainer>
      </Col>
    </div>
  );
};
