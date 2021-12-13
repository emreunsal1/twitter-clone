import React, { createContext, useEffect, useState } from "react";

export const mainContext = createContext();

export default function Context({ children }) {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  const data = {
    user: {
      userInfo,
      setUserInfo,
    },
  };
  return <mainContext.Provider value={data}>{children}</mainContext.Provider>;
}
