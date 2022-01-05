import React, { useState } from "react";
import { useMainContext } from "./../context";
import AddTweetButton from "./AddTweetButton";
import "../style/addTweet.scss";

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
  return (
    <div className="add-tweet-container">
      <div className="add-tweet-content">
        <div className="image-container">
          <img src={profilePhoto}></img>
        </div>
        <div className="textarea-container">
          <textarea
            onInput={(e) => setNewTweetText(e.target.innerTEXT)}
            placeholder="What do you do ?"
          >
            {newTweetText}
          </textarea>
        </div>
      </div>
      <div className="add-tweet-buttons">
        <AddTweetButton
          imagePreviev={imagePreviev}
          addTweet={addTweet}
          medias={medias}
        />
      </div>
    </div>
  );
}
