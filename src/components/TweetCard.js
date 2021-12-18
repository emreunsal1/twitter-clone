import React from "react";

export default function TweetCard({ tweet }) {
  return (
    <div>
      <li>{tweet.text}</li>
      <li>
        {tweet.media.map((media) =>
          media.type === "jpg" ? (
            <img width={300} height={300} src={media.url} alt="foto" />
          ) : (
            <video width={300} height={300} controls="true" src={media.url} />
          )
        )}
      </li>
    </div>
  );
}
