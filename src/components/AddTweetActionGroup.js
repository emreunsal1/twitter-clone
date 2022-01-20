import React, { useEffect, useRef } from "react";
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
  setTweetPopup,
}) {
  const uploadInput = useRef();

  const openFileInput = () => {
    uploadInput.current.click();
  };

  const isEdit =
    newTweetText || medias.length > 0 ? "send-button edit" : "send-button";

  return (
    <div className="add-tweet-buttons">
      <input
        type="file"
        className="photo"
        accept="image/jpg, image/jpeg"
        multiple
        hidden
        ref={uploadInput}
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
      <div
        className={isEdit}
        onClick={() => {
          uploadInput.current.value = null;
          addTweet();
          setTweetPopup(false);
        }}
      >
        Tweetle
      </div>
    </div>
  );
}
