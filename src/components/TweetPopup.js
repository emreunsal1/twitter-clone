import React, { useEffect } from "react";
import AddTweet from "./AddTweet";
import { useMainContext } from "../context";

export default function TweetPopup() {
  const context = useMainContext();
  const { tweetPopup, setTweetPopup } = context.popup;

  if (!tweetPopup) {
    return null;
  }

  document.body.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "add-tweet-popup") setTweetPopup(false);
  });

  return (
    <div className="add-tweet-popup">
      <div className="add-tweet-popup-container">
        <AddTweet tweetPopup={tweetPopup} setTweetPopup={setTweetPopup} />
      </div>
    </div>
  );
}
