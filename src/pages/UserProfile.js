import { Col, Row } from "react-bootstrap";
import account from "../assets/account.svg";
import { NavBar } from "../components/NavBar";
import { PlaceHolder } from "../components/PlaceHolder";

export const UserProfile = () => {
  return (
    <div>
      <NavBar />

      <img src={account} alt="ProfilePic" style={{ paddingTop: "1%" }}></img>

      <Row style={{ padding: "5%", paddingBottom: "1.5%", paddingTop: "1%" }}>
        <Col>
          <button className="profileButton">
            <h1>BALANCE</h1>
          </button>
        </Col>
        <Col>
          <button className="profileButton">
            <h1>EDIT</h1>
          </button>
        </Col>
      </Row>

      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
      <PlaceHolder />
    </div>
  );
};
