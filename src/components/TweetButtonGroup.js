import React from "react";
import { useMainContext } from "../context";
import { ReactComponent as Like } from "./icons/like.svg";
import { ReactComponent as Share } from "./icons/share.svg";
import { ReactComponent as Retweet } from "./icons/retweet.svg";
import { ReactComponent as Comment } from "./icons/comment.svg";

export default function TweetButtonGroup({ tweet }) {
  const context = useMainContext();
  const { addLike, retweet } = context.tweet;
  const isLiked = context.user.likedTweets.some((item) => tweet.id === item);

  return (
    <div className="tweet-button-container">
      <div className="icon-container">
        <Comment />
      </div>
      <div className="icon-container">
        <Retweet />
      </div>
      <div className="icon-container like">
        <Like onClick={() => addLike(tweet.id, isLiked)}>like</Like>
        <p>{tweet.like}</p>
      </div>
      <div className="icon-container">
        <Share />
      </div>
    </div>
  );
}
