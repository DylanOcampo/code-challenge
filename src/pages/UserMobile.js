import account from "../assets/account.svg";
import { ProfilePrefab } from "../components/ProfilePrefab";
import { Balance } from "../components/Money";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import back from "../assets/back.svg";
import addressIcon from "../assets/icons/addressIcon.svg";
import ageIcon from "../assets/icons/ageIcon.svg";
import companyIcon from "../assets/icons/companyIcon.svg";
import eyeIcon from "../assets/icons/eyeIcon.svg";
import mailIcon from "../assets/icons/mailIcon.svg";
import nameIcon from "../assets/icons/nameIcon.svg";
import numberIcon from "../assets/icons/numberIcon.svg";
import passwordIcon from "../assets/icons/passwordIcon.svg";

export const UserMobile = ({ _value }) => {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    address: _value.address,
    age: _value.age,
    eyeColor: _value.eyeColor,
    company: _value.company,
    name: _value.name.first + " " + _value.name.last,
    email: _value.email,
    password: _value.password,
    phone: _value.phone,
  });

  const handleClick = async () => {
    const url = `http://localhost:5000/edit/${_value._id}/${_value.password}`;
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error");
      }
      setIsEditable(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (fieldName, newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  return (
    <div className="colCenter">
      <div className="profileTop">
        <h1 className="profileTitle">{_value.name.first}</h1>
        <button className="profileBack">
          <img
            src={back}
            alt="back"
            onClick={() => {
              navigate("/");
            }}
          ></img>
        </button>
      </div>

      <img src={account} alt="ProfilePic"></img>
      <Balance num={_value.balance}></Balance>
      <div style={{ padding: "10px", width: "100%" }}>
        <ProfilePrefab
          _img={addressIcon}
          _text={_value.address}
          editable={isEditable}
          fieldName="address"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={ageIcon}
          _text={_value.age}
          editable={isEditable}
          fieldName="age"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={eyeIcon}
          _text={_value.eyeColor}
          editable={isEditable}
          fieldName="eyeColor"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={companyIcon}
          _text={_value.company}
          editable={isEditable}
          fieldName="company"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={nameIcon}
          _text={_value.name.first + " " + _value.name.last}
          editable={isEditable}
          fieldName="name"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={mailIcon}
          _text={_value.email}
          editable={isEditable}
          fieldName="email"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={passwordIcon}
          _text={_value.password}
          editable={isEditable}
          fieldName="password"
          onChange={handleInputChange}
        />
        <ProfilePrefab
          _img={numberIcon}
          _text={_value.phone}
          editable={isEditable}
          fieldName="phone"
          onChange={handleInputChange}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        {isEditable ? (
          <div style={{ display: "flex", width: "80%" }}>
            <button className="styleButton" onClick={handleClick}>
              <h1 style={{ color: "white", fontSize: "4vh" }}>Save</h1>
            </button>
            <button
              className="styleButton"
              onClick={() => {
                setIsEditable(false);
              }}
            >
              <h1 style={{ color: "white", fontSize: "4vh" }}>Cancel</h1>
            </button>
          </div>
        ) : (
          <button
            className="styleButton"
            onClick={() => {
              setIsEditable(true);
            }}
          >
            <h1 style={{ color: "white", fontSize: "4vh" }}>Edit Profile</h1>
          </button>
        )}
      </div>
    </div>
  );
};
