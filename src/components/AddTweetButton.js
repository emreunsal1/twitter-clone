import React from "react";

export default function AddTweetButton({ addTweet, imagePreviev, medias }) {
  return (
    <div>
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
