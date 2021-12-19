import React from "react";
import TweetCard from "./TweetCard";

export default function TweetWrapper({ tweets }) {
  return (
    <div>
      {tweets.map((tweet) => (
        <TweetCard tweet={tweet} />
      ))}
    </div>
  );
}
