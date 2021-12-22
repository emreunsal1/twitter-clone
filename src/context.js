import React, { createContext, useState, useContext } from "react";
import { tweet } from "./data";
export const mainContext = createContext();

export default function Context({ children }) {
  const [allTweets, setAllTweets] = useState(tweet);
  const [userInfo, setUserInfo] = useState({});
  const [likedTweets, setLikedTweets] = useState([]);

  const myTweets = allTweets.filter((tweet) => tweet.userId === userInfo.id);

  const addNewTweet = (tweetText, medias) => {
    const current = new Date().getTime();
    const newTweet = {
      id: current,
      userId: contextData.user.userInfo.id,
      date: current,
      dateText: "",
      text: tweetText,
      like: 0,
      media: medias,
    };
    setAllTweets([newTweet, ...allTweets]);
  };

  const addLike = (id, isLiked) => {
    const likedTweet = allTweets.find((tweet) => tweet.id === id);
    console.log(likedTweets);
    if (isLiked) {
      likedTweet.like--;
      const newLikeArray = likedTweets.filter((tweetId) => tweetId !== id);
      setLikedTweets(newLikeArray);
    } else {
      likedTweet.like++;
      setLikedTweets([...likedTweets, id]);
    }
    const otherTweets = allTweets.filter((tweet) => tweet.id !== id);
    setAllTweets([...otherTweets, likedTweet]);
  };

  const allTweetsByDate = allTweets.sort((a, b) => {
    return a.date - b.date;
  });

  const contextData = {
    user: {
      userInfo,
      likedTweets,
    },
    tweet: {
      myTweets,
      addNewTweet,
      allTweets,
      allTweetsByDate,
      addLike,
    },
  };

  return (
    <mainContext.Provider value={contextData}>{children}</mainContext.Provider>
  );
}
export const useMainContext = () => useContext(mainContext);
