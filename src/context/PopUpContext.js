import React, { createContext, useState } from "react";

const ElementContextPopUp = createContext();

const ElementProviderPopUp = ({ children }) => {
  const [value, setValue] = useState(false);

  const changeValuePopUP = (newValue) => {
    setValue(newValue);
  };

  return (
    <ElementContextPopUp.Provider value={{ value, changeValuePopUP }}>
      {children}
    </ElementContextPopUp.Provider>
  );
};

export { ElementContextPopUp, ElementProviderPopUp };
