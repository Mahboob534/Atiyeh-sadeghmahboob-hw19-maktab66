import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
export const InfoContext = createContext({});
function InfoProvider({ children }) {
  const [countariesInfo, setCountariesInfo] = useState([{}]);
  
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((result) => setCountariesInfo(result.data))
      .catch((error) => alert(error));
  }, []);
  console.log(countariesInfo)
  return (
    <InfoContext.Provider value={{ countariesInfo, setCountariesInfo }}>
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
