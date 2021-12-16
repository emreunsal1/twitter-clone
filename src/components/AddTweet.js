import React, { useState } from "react";
import { useMainContext } from "./../context";

export default function AddTweet() {
  const [newTweetText, setNewTweetText] = useState("");
  const [movieInfo, setMovieInfo] = useState({ url: "", type: "" });

  const context = useMainContext();

  const imagePreviev = (event) => {
    [...event.target.files].map((file) => {
      if (file.name.match(/\.jpeg|png|gif|jpg/)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () =>
          setMovieInfo({ url: reader.result, type: "jpg" })
        );
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener("load", () =>
          setMovieInfo({ url: reader.result, type: "mp4" })
        );
      }
    });
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNewTweetText(e.target.value)}
      ></input>
      <button
        type="submit"
        onClick={() => context.tweet.addNewTweet(newTweetText, movieInfo)}
      >
        Add new Tweet
      </button>
      <input type="file" onChange={(e) => imagePreviev(e)}></input>
      {movieInfo.type === "jpg" ? (
        <img src={movieInfo.url} width={300} height={"300"}></img>
      ) : (
        <video
          controls="true"
          src={movieInfo.url}
          width={300}
          height={"200"}
        ></video>
      )}
    </div>
  );
}
