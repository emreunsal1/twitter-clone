import React, { useState } from "react";
import { useMainContext } from "./../context";

export default function AddTweet() {
  const [newTweetText, setNewTweetText] = useState("");
  const [medias, setMedias] = useState([]);

  const context = useMainContext();

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
    <div>
      <input
        type="text"
        value={newTweetText}
        onChange={(e) => setNewTweetText(e.target.value)}
      ></input>
      <button type="submit" onClick={() => addTweet()}>
        Add new Tweet
      </button>
      <input
        type="file"
        id="uploadInput"
        accept="image/jpg, image/jpeg, video/mp4"
        multiple
        onChange={(e) => imagePreviev(e)}
      ></input>
      {medias.map((media) =>
        media.type === "jpg" ? (
          <img src={media.url} width={300} height={"300"}></img>
        ) : (
          <video
            controls="true"
            src={media.url}
            width={300}
            height={"200"}
          ></video>
        )
      )}
    </div>
  );
}
