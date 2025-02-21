import { createContext, useState } from "react";

export const CompanyNameContext = createContext();

export const CompanyNameProvider = ({ children }) => {
  const [companyName, setCompanyName] = useState("KhanDesh IIT"); 

  return (
    <>
      <CompanyNameContext.Provider value={{ companyName, setCompanyName }}>
        {children}
      </CompanyNameContext.Provider>
    </>
  );
};