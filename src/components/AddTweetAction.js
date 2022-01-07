import React from "react";

export default function AddTweetButton({ openFileInput, icon }) {
  return (
    <div className="add-tweet-button" onClick={openFileInput}>
      {icon}
    </div>
  );
}
