import logo from "../assets/logo.png";
import { InputContainer } from "../components/InputContainer";

export const LoginMobile = () => {
  return (
    <div className="loginBackground">
      <div className="colCenter">
        <img src={logo} className="logoMobile"></img>
        <div style={{ paddingTop: "5%", width: "100%" }}></div>
      </div>
      <InputContainer></InputContainer>
    </div>
  );
};
