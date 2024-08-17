import Form from "react-bootstrap/Form";
import { useState } from "react";

export const ProfilePrefab = ({
  _img,
  _text,
  editable,
  onChange,
  fieldName,
}) => {
  const [valuePrefab, setValuePrefab] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValuePrefab(newValue);
    onChange(fieldName, newValue);
  };

  if (editable) {
    return (
      <div className="profilePrefabContainer">
        <img src={_img} className="profilePrefabImage" alt="logo"></img>
        <Form.Control
          type="text"
          value={valuePrefab}
          onChange={handleChange}
          placeholder={_text}
          style={{ width: "80%" }}
        />
      </div>
    );
  }

  return (
    <div className="profilePrefabContainer">
      <img src={_img} className="profilePrefabImage" alt="logo"></img>
      <h4 style={{ paddingLeft: "5%", fontSize: "2.5vh" }}> {_text}</h4>
    </div>
  );
};
