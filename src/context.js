import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { data, tweet } from "./data";
export const mainContext = createContext();

export default function Context({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [tweetInfo, setTweetInfo] = useState({});

  useEffect(() => {
    console.log(userInfo);
    setTweet();
  }, [userInfo]);

  const contextData = {
    user: {
      userInfo,
      setUserInfo,
    },
  };

  const setTweet = () => {
    const malYagmur = tweet.filter((tweet) => tweet.userId == userInfo.id);
    console.log(malYagmur);
  };

  return (
    <mainContext.Provider value={contextData}>{children}</mainContext.Provider>
  );
}
