import React, { useEffect } from "react";
import AddTweetAction from "./AddTweetAction";
import { ReactComponent as AddImageIcon } from "./icons/addImage.svg";
import { ReactComponent as AddGifIcon } from "./icons/addGif.svg";
import { ReactComponent as AddPollIcon } from "./icons/addPoll.svg";
import { ReactComponent as AddEmojiIcon } from "./icons/addEmoji.svg";
import { ReactComponent as Plan } from "./icons/plan.svg";
import { ReactComponent as Location } from "./icons/addLocation.svg";

export default function AddTweetButtons({
  newTweetText,
  addTweet,
  imagePreviev,
  medias,
}) {
  const openFileInput = () => {
    const input = document.querySelector("#uploadInput");
    input.click();
  };
  const isEdit = () => {
    let addClass = "send-button";
    const addDiv = document.querySelector("#addTweet");
    if (newTweetText || medias.length > 0) {
      addClass = "send-button edit";
      addDiv.className = addClass;
      return;
    }
    addDiv.className = addClass;
  };

  useEffect(() => {
    isEdit();
  }, [newTweetText, medias]);

  return (
    <div className="add-tweet-buttons">
      <input
        type="file"
        className="photo"
        id="uploadInput"
        accept="image/jpg, image/jpeg, video/mp4"
        multiple
        hidden
        onChange={(e) => imagePreviev(e)}
      ></input>
      <div className="media-buttons">
        <AddTweetAction openFileInput={openFileInput} icon={<AddImageIcon />} />
        <AddTweetAction icon={<AddGifIcon />} />
        <AddTweetAction icon={<AddPollIcon />} />
        <AddTweetAction icon={<AddEmojiIcon />} />
        <AddTweetAction icon={<Plan />} />
        <AddTweetAction icon={<Location />} />
      </div>
      <div id="addTweet" onClick={() => addTweet()}>
        Tweetle
      </div>
    </div>
  );
}
