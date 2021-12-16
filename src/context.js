import React, { createContext, useState, useContext } from "react";
import { tweet } from "./data";
export const mainContext = createContext();

export default function Context({ children }) {
  const [allTweets, setAllTweets] = useState(tweet);
  const [userInfo, setUserInfo] = useState({});

  const myTweets = allTweets.filter((tweet) => tweet.userId === userInfo.id);

  const addNewTweet = (tweetText, movies) => {
    const current = new Date();
    const newTweet = {
      id: current,
      userId: contextData.user.userInfo.id,
      date: current,
      dateText: "",
      text: tweetText,
      media: {
        url: movies.url,
        type: movies.type,
      },
    };
    setAllTweets([newTweet, ...allTweets]);
  };

  const contextData = {
    user: {
      userInfo,
      setUserInfo,
    },
    tweet: {
      myTweets,
      addNewTweet,
      allTweets,
      setAllTweets,
    },
  };

  return (
    <mainContext.Provider value={contextData}>{children}</mainContext.Provider>
  );
}
export const useMainContext = () => useContext(mainContext);
