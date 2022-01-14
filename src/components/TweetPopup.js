import React from "react";
import AddTweet from "./AddTweet";
import { useMainContext } from "../context";

export default function TweetPopup() {
  const context = useMainContext();
  const { popupOpened, setPopupOpened } = context.popup;
  if (!popupOpened) {
    return null;
  }
  return (
    <div className="add-tweet-popup">
      <div className="add-tweet-popup-container">
        <AddTweet />
      </div>
    </div>
  );
}
