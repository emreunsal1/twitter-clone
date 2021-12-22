import React, { useState, useEffect } from "react";
import { useMainContext } from "../context";
import TweetButtonGroup from "./TweetButtonGroup";

export default function TweetCard({ tweet }) {
  const context = useMainContext();

  return (
    <div style={{ border: "1px solid", marginBottom: "30px" }}>
      <li>
        {tweet.text}
        <p>{tweet.like}</p>
      </li>

      {tweet.media.map((media) =>
        media.type === "jpg" ? (
          <img width={300} height={300} src={media.url} alt="foto" />
        ) : (
          <video width={300} height={300} controls="true" src={media.url} />
        )
      )}
      <TweetButtonGroup tweet={tweet} />
    </div>
  );
}
