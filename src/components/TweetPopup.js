import React from "react";
import AddTweet from "./AddTweet";
import { useMainContext } from "../context";

export default function TweetPopup() {
  const context = useMainContext();
  const { tweetPopup, setTweetPopup } = context.popup;
  if (!tweetPopup) {
    return null;
  }
  return (
    <div className="add-tweet-popup">
      <div className="add-tweet-popup-container">
        <AddTweet setTweetPopup={setTweetPopup} />
      </div>
    </div>
  );
}
