import React, { useState, useEffect } from "react";
import { useMainContext } from "../context";
import TweetButtonGroup from "./TweetButtonGroup";
import { user } from "../data";

export default function TweetCard({ tweet }) {
  const context = useMainContext();

  const userInfo = user.find((user) => user.id === tweet.userId);

  return (
    <div>
      <div className="tweet-content">
        <div className="profile-photo">
          <img src={userInfo.profilePhoto}></img>
        </div>
        <div className="tweet-info">
          <div className="user-info">
            <h4>{userInfo.name}</h4>
            <h5>{"@" + userInfo.userName}</h5>
          </div>
          <div className="tweet-text">{tweet.text}</div>
          <div className="tweet-media">
            <div className="image-container">
              {tweet.media.map((media) =>
                media.type === "jpg" ? (
                  <img width={300} height={300} src={media.url} alt="foto" />
                ) : (
                  <video
                    width={300}
                    height={300}
                    controls="true"
                    src={media.url}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <TweetButtonGroup tweet={tweet} />
    </div>
  );
}
