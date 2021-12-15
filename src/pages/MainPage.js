import React, { useContext, useEffect, useState } from "react";
import { mainContext } from "../context";
import { tweet } from "../data";

export default function MainPage() {
  const [newTweetText, setNewTweetText] = useState("");
  const context = useContext(mainContext);
  const tweetContext = context.tweet.tweetInfo;

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
    context.tweet.setTweet();
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTweetText(e.target.value)}
      ></input>
      <button type="submit" onClick={() => addNewTweet(newTweetText)}>
        Add new Tweet
      </button>
      <ul>
        {tweetContext.map((tweetInfo) => (
          <li>{tweetInfo.text}</li>
        ))}
      </ul>
    </div>
  );
}
