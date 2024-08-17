import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import menu from "../assets/menu.svg";
import rectangle from "../assets/darkRectangle.svg";

export const NavBar = () => {
  return (
    <div>
      <Navbar className="ProfileNav">
        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "rgba(255, 255, 255, 0)",
              borderColor: "rgba(255, 255, 255, 0)",
            }}
          >
            <img src={menu} alt="menu"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: "50px",
          }}
        >
          <img
            src={rectangle}
            alt="bar"
            style={{ width: "20%", height: "20px" }}
          ></img>
        </div>
      </Navbar>
    </div>
  );
};
