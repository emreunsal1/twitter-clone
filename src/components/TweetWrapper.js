import React from "react";
import TweetCard from "./TweetCard";

export default function TweetWrapper({ tweets }) {
  return (
    <div className="tweet-container">
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} tweetMedias={tweet.media.length} />
      ))}
    </div>
  );
}
