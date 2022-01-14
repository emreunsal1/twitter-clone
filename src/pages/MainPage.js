import React from "react";

import { useMainContext } from "./../context";
import AddTweet from "./../components/AddTweet";
import TweetWrapper from "../components/TweetWrapper";
import TweetPopup from "../components/TweetPopup";

export default function MainPage() {
  const context = useMainContext();
  const { link } = context.user;
  const { allTweetsByDate } = context.tweet;

  return (
    <div>
      <AddTweet />
      <TweetPopup />
      <TweetWrapper tweets={allTweetsByDate()} />
    </div>
  );
}
