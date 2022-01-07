import React, { useState, useEffect } from "react";
import { useMainContext } from "./../context";
import AddTweetActionGroup from "./AddTweetActionGroup";
import { ReactComponent as Star } from "./icons/star.svg";

export default function AddTweet() {
  const [newTweetText, setNewTweetText] = useState("");
  const [medias, setMedias] = useState([]);

  const context = useMainContext();
  const { profilePhoto } = context.user.userInfo;

  const imagePreviev = (event) => {
    const files = [...event.target.files].map((file) => {
      const url = URL.createObjectURL(file);
      return {
        url,
        type: file.name.match(/\.jpeg|jpg/) ? "jpg" : "mp4",
      };
    });

    setMedias(files);
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

  const mediasPosition = () => {
    const mediasClassName = document.querySelector("#add-medias");
    if (medias.length === 1) {
      mediasClassName.className = "add-image one";
      return;
    }
  };
  const deleteMediaItem = (url) => {
    const newMedias = medias.filter((media) => media.url !== url);
    setMedias(newMedias);
  };
  useEffect(() => {
    mediasPosition();
    console.log(medias);
  }, [medias]);

  return (
    <div className="add-tweet-container">
      <div className="add-tweet-header">
        <h2>Anasayfa</h2>
        <Star />
      </div>
      <div className="add-tweet-content">
        <div className="image-profile-container">
          <img src={profilePhoto}></img>
        </div>
        <div className="textarea-container">
          <textarea
            onInput={(e) => setNewTweetText(e.target.value)}
            placeholder="What do you do ?"
            value={newTweetText}
          >
            {newTweetText}
          </textarea>
          <div className="tweet-medias">
            {medias.map((media) =>
              media.type === "jpg" ? (
                <div id="add-medias" className="add-image">
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
