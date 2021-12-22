import React from "react";
import { useMainContext } from "../context";

export default function TweetButtonGroup({ tweet }) {
  const context = useMainContext();
  const { addLike } = context.tweet;

  const isLiked = context.user.likedTweets.some((item) => tweet.id === item);

  return (
    <div>
      <button onClick={() => addLike(tweet.id, isLiked)}>like</button>
      <button>Rt</button>
      <button>share</button>
    </div>
  );
}
