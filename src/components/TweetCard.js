import React from "react";
import { context } from "../context";

export default function TweetCard({ tweetInfo }) {
  return (
    <div>
      <li>{tweetInfo.text}</li>
    </div>
  );
}
