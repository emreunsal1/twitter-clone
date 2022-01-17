import React from "react";
import { useParams } from "react-router-dom";
import ProfileContent from "../components/ProfileContent";
import TweetWrapper from "../components/TweetWrapper";
import { useMainContext } from "../context";

export default function Profile() {
  const context = useMainContext();
  const { allTweets } = context.tweet;
  const { userInfo, allUsers } = context.user;
  const { username } = useParams();
  const user = allUsers.find((user) => user.userName === username);
  if (user === undefined) {
    console.log("yarak");
  }

  const tweets = allTweets.filter((tweet) => tweet.userId === user.id);

  return (
    <div>
      <ProfileContent userInfo={user} tweets={tweets} loginUser={userInfo} />
      <TweetWrapper tweets={tweets} />
    </div>
  );
}
