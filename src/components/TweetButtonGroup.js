import React from "react";
import { useMainContext } from "../context";
import TweetButton from "./TweetButtonAction";
import { Comment, Retweet, Share, LikeTrue, Like } from "./icons";

export default function TweetButtonGroup({ tweet }) {
  const context = useMainContext();
  const { addLike } = context.tweet;
  const isLiked = context.user.likedTweets.some((item) => tweet.id === item);

  const likedControl = () => {
    if (isLiked) {
      return "icon-container like";
    }
    return "icon-container";
  };

  return (
    <div className="tweet-button-container">
      <TweetButton icon={<Comment />} />
      <TweetButton icon={<Retweet />} />
      <div className={likedControl()}>
        {isLiked ? (
          <LikeTrue onClick={() => addLike(tweet.id, isLiked)} />
        ) : (
          <Like onClick={() => addLike(tweet.id, isLiked)} />
        )}
        <p>{tweet.like}</p>
      </div>
      <TweetButton icon={<Share />} />
    </div>
  );
}
