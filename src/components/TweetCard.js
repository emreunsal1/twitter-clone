import React from "react";
import { context } from "../context";

export default function TweetCard({ tweetInfo }) {
  return (
    <div>
      <li>{tweetInfo.text}</li>
      <li>
        {tweetInfo.media.url != "" &&
          (tweetInfo.media.type === "jpg" ? (
            <img width={300} height={300} src={tweetInfo.media.url}></img>
          ) : (
            <video
              width={300}
              height={300}
              controls="true"
              src={tweetInfo.media.url}
            ></video>
          ))}
      </li>
    </div>
  );
}
