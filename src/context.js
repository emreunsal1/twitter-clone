import React, { createContext, useEffect, useState } from "react";
import { data, tweet } from "./data";
export const mainContext = createContext();

export default function Context({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [tweetInfo, setTweetInfo] = useState([]);

  const setTweet = () => {
    const userTweets = tweet.filter((tweet) => tweet.userId === userInfo.id);
    setTweetInfo(userTweets);
  };

  const addTweet = () => {
    tweet.push(tweetInfo);
    console.log(tweet);
  };

  const contextData = {
    user: {
      userInfo,
      setUserInfo,
    },
    tweet: {
      tweetInfo,
      setTweetInfo,
      setTweet,
      addTweet,
    },
  };

  return (
    <mainContext.Provider value={contextData}>{children}</mainContext.Provider>
  );
}
