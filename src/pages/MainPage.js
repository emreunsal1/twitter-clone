import React, { useState } from "react";
import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import TweetPopup from "../components/TweetPopup";

export default function MainPage() {
  const context = useMainContext();
  const { allTweetsByDate } = context.tweet;
  const { tweetPopup, setTweetPopup } = context.popup;

  return (
    <div>
      <AddTweet setTweetPopup={setTweetPopup} />
      <TweetPopup />
      <TweetWrapper tweets={allTweetsByDate()} />
    </div>
  );
}
