import React, { useState, useEffect } from "react";
import { useMainContext } from "../context";
import TweetButtonGroup from "./TweetButtonGroup";
import { user } from "../data";

export default function TweetCard({ tweet, tweetMedias }) {
  const context = useMainContext();

  const userInfo = user.find((user) => user.id === tweet.userId);

  const tweetMediaOneElement = () => {
    if (tweet.media.length === 1) {
      console.log("if içi çalıştı");
      return "image-container one";
    }
    return "image-container";
  };

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
            {tweet.media.map((media) =>
              media.type === "jpg" ? (
                <div id="image-container" className={tweetMediaOneElement()}>
                  <img src={media.url} alt="foto" />
                </div>
              ) : (
                <div className="image-container">
                  <video
                    width={300}
                    height={300}
                    controls="true"
                    src={media.url}
                  />
                </div>
              )
            )}
          </div>
          <div className="tweet-button-group">
            <TweetButtonGroup tweet={tweet} />
          </div>
        </div>
      </div>
    </div>
  );
}
