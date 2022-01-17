import React, { createContext, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { tweet, user } from "./data";
export const mainContext = createContext();

export default function Context({ children }) {
  const [allTweets, setAllTweets] = useState(tweet);
  const [userInfo, setUserInfo] = useState({});
  const [likedTweets, setLikedTweets] = useState([]);
  const [tweetPopup, setTweetPopup] = useState(false);
  const [allUsers, setAllUsers] = useState(user);

  let history = useHistory();

  useEffect(() => {
    loginUser();
  }, [allUsers]);

  useEffect(() => {
    loginUser();
  }, []);

  const loginUser = () => {
    const loginUser = allUsers.find(
      (user) => user.id === Number(localStorage.getItem("userInfo"))
    );
    if (localStorage.getItem("userInfo")) {
      setUserInfo(loginUser);
    }
  };

  const myTweets = allTweets.filter((tweet) => tweet.userId === userInfo.id);
  const link = (user) => {
    history.push(`/profile/${user.userName}`);
  };

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
  const allTweetsByDate = () =>
    [...allTweets].sort((a, b) => {
      return b.date - a.date;
    });

  const addLike = (id, isLiked) => {
    const likedTweet = allTweets.find((tweet) => tweet.id === id);
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
  const editUserInfo = (data) => {
    const newAllUsers = allUsers.filter((user) => user.id !== data.id);
    setAllUsers([...newAllUsers, data]);
    setUserInfo(data);
    link(data);
  };

  const deleteTweet = (tweetId) => {
    const clearTweet = allTweets.filter((tweet) => tweet.id !== tweetId);
    setAllTweets(clearTweet);
  };

  const contextData = {
    user: {
      userInfo,
      likedTweets,
      setUserInfo,
      link,
      editUserInfo,
      allUsers,
      setAllUsers,
    },
    tweet: {
      myTweets,
      addNewTweet,
      allTweets,
      allTweetsByDate,
      addLike,
      deleteTweet,
    },
    history,
    popup: {
      tweetPopup,
      setTweetPopup,
    },
  };

  return (
    <mainContext.Provider value={contextData}>{children}</mainContext.Provider>
  );
}
export const useMainContext = () => useContext(mainContext);
