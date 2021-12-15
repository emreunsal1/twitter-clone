import React, { useState } from "react";
import { useMainContext } from "./../context";

export default function AddTweet() {
  const [newTweetText, setNewTweetText] = useState("");
  const context = useMainContext();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTweetText(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={() => context.tweet.addNewTweet(newTweetText)}
      >
        Add new Tweet
      </button>
    </div>
  );
}
