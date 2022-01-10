import React, { useEffect } from "react";
import { useMainContext } from "../context";
import TweetButton from "./TweetButtonAction";
import { ReactComponent as Like } from "./icons/like.svg";
import { ReactComponent as Share } from "./icons/share.svg";
import { ReactComponent as Retweet } from "./icons/retweet.svg";
import { ReactComponent as Comment } from "./icons/comment.svg";
import { ReactComponent as LikeTrue } from "./icons/likeTrue.svg";

export default function TweetButtonGroup({ tweet }) {
  const context = useMainContext();
  const { addLike, retweet } = context.tweet;
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
