import React from "react";
import AddTweet from "./AddTweet";
import { useMainContext } from "../context";

export default function TweetPopup() {
  const context = useMainContext();
  const { tweetPopup, setTweetPopup } = context.popup;

  if (!tweetPopup) {
    document.body.style.overflow = "auto";
    return null;
  }

  document.body.style.overflow = "hidden";

  document.body.addEventListener("click", (e) => {
    if (e.target.className === "add-tweet-popup") setTweetPopup(false);
  });

  return (
    <div className="add-tweet-popup">
      <div className="add-tweet-popup-container">
        <AddTweet />
      </div>
    </div>
  );
}
