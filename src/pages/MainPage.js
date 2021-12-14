import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../context";
import { tweet } from "../data";

export default function MainPage() {
  const context = useContext(mainContext);
  useEffect(() => {
    context.tweet.setTweet();
  }, []);

  const addNewTweet = (tweetText) => {
    const current = new Date();
    const newTweet = {
      id: 5,
      userId: context.user.userInfo.id,
      date: `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`,
      text: tweetText,
    };
    tweet.push(newTweet);
  };

  const tweet = context.tweet.tweetInfo;
  return (
    <div>
      <input type="text"></input>
      <button type="submit">Add new Tweet</button>
      <ul>
        {tweet.map((tweetInfo) => (
          <li>{tweetInfo.text}</li>
        ))}
      </ul>
    </div>
  );
}
