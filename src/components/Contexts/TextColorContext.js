import { createContext, useState } from "react";

export const TextColorContext = createContext();

export const TextColorProvider = ({ children }) => {
  const [textColor, setTextColor] = useState("#00bcd4"); // #795548

  return (
    <>
      <TextColorContext.Provider value={{ textColor, setTextColor }}>
        {children}
      </TextColorContext.Provider>
    </>
  );
};
