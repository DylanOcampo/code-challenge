import React, { createContext, useState } from "react";

const ElementContext = createContext();

const ElementProvider = ({ children }) => {
  const [value, setValue] = useState(0);

  const changeValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <ElementContext.Provider value={{ value, changeValue }}>
      {children}
    </ElementContext.Provider>
  );
};

export { ElementContext, ElementProvider };
