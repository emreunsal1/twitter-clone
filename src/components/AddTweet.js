import React, { useState, useEffect } from "react";
import { useMainContext } from "./../context";
import AddTweetActionGroup from "./AddTweetActionGroup";
import ProfilePhoto from "./ProfilePhoto";
import { ReactComponent as Star } from "./icons/star.svg";

export default function AddTweet() {
  const [newTweetText, setNewTweetText] = useState("");
  const [medias, setMedias] = useState([]);

  const context = useMainContext();
  const { userInfo } = context.user;

  const imagePreviev = (event) => {
    const files = [...event.target.files].map((file) => {
      const url = URL.createObjectURL(file);
      return {
        url,
        type: file.name.match(/\.jpeg|jpg/) ? "jpg" : "mp4",
      };
    });

    setMedias(files.slice(0, 4));
  };

  const clearInputs = () => {
    setMedias([]);
    setNewTweetText("");
    const uploadInput = document.getElementById("uploadInput");
    uploadInput.value = null;
  };
  const addTweet = () => {
    context.tweet.addNewTweet(newTweetText, medias);
    clearInputs();
  };

  const mediasClassName = medias.length === 1 ? "add-image one" : "add-image";

  const deleteMediaItem = (url) => {
    const newMedias = medias.filter((media) => media.url !== url);
    setMedias(newMedias);
  };

  return (
    <div className="add-tweet-container">
      <div className="add-tweet-header">
        <h2>Anasayfa</h2>
        <Star />
      </div>
      <div className="add-tweet-content">
        <div className="image-profile-container">
          <ProfilePhoto user={userInfo} size={60} />
        </div>
        <div className="textarea-container">
          <textarea
            onInput={(e) => setNewTweetText(e.target.value)}
            placeholder="Neler oluyor?"
            value={newTweetText}
          >
            {newTweetText}
          </textarea>
          <div className="tweet-medias">
            {medias.map((media) =>
              media.type === "jpg" ? (
                <div id="add-medias" className={mediasClassName}>
                  <img src={media.url} width={300} height={"300"}></img>
                  <div
                    className="delete-button"
                    onClick={() => deleteMediaItem(media.url)}
                  >
                    X
                  </div>
                </div>
              ) : (
                <div className="add-video">
                  <video
                    controls="true"
                    src={media.url}
                    width={300}
                    height={"200"}
                  ></video>
                  <div className="delete-button"></div>
                </div>
              )
            )}
          </div>
          <AddTweetActionGroup
            newTweetText={newTweetText}
            imagePreviev={imagePreviev}
            addTweet={addTweet}
            medias={medias}
          />
        </div>
      </div>
    </div>
  );
}
