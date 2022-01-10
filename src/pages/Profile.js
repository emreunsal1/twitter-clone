import React from "react";
import { useParams } from "react-router-dom";
import ProfileContent from "../components/ProfileContent";
import TweetWrapper from "../components/TweetWrapper";
import { useMainContext } from "../context";

export default function Profile() {
  const context = useMainContext();
  const { userName } = useParams();
  return (
    <div>
      <ProfileContent />
      <TweetWrapper tweets={context.tweet.myTweets} />
    </div>
  );
}
