import React, { useState } from "react";
import { useMainContext } from "../context";
import ProfilePhoto from "./ProfilePhoto";
import PopupMenu from "./PopupMenu";
import Slider from "./SliderMenu";
import TweetButtonGroup from "./TweetButtonGroup";
import { ReactComponent as ExpandedIcon } from "./icons/expandedButton.svg";
import { ReactComponent as DeleteIcon } from "./icons/delete.svg";

export default function TweetCard({ tweet }) {
  const [popupOpened, setPopupOpened] = useState(false);
  const [sliderPopup, setSliderPopup] = useState(false);

  const context = useMainContext();
  const { allUsers, userInfo } = context.user;
  const { deleteTweet } = context.tweet;

  const tweetOwner = allUsers.find((user) => user.id === tweet.userId);
  const isMyTweet = tweet.userId === userInfo.id ? true : false;
  const popupStyle = { top: 10, right: 10 };
  const popupItems = [
    {
      icon: <DeleteIcon />,
      content: "Sil",
      onClick: () => {
        deleteTweet(tweet.id);
      },
      iconColor: "#F4212E",
    },
  ];

  const tweetMediaOneElement = () => {
    if (tweet.media.length === 1) {
    }
    return "image-container";
  };

  return (
    <div className="tweet-card">
      <Slider
        sliderPopup={sliderPopup}
        setSliderPopup={setSliderPopup}
        medias={tweet.media}
      />
      <div className="tweet-content">
        <div className="profile-photo">
          <ProfilePhoto user={tweetOwner} size={45} />
        </div>
        <div className="tweet-info">
          <div className="header">
            <div className="user-info">
              <h4>{tweetOwner.name}</h4>
              <h5>{"@" + tweetOwner.userName}</h5>
            </div>
            <div
              className="expanded-button"
              tabIndex={-1}
              onFocus={() => setPopupOpened(true)}
              onBlur={() => setPopupOpened(false)}
            >
              <ExpandedIcon />
              <div className="popup">
                {isMyTweet && (
                  <PopupMenu
                    style={popupStyle}
                    items={popupItems}
                    isOpened={popupOpened}
                    setPopupOpened={setPopupOpened}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="tweet-text">{tweet.text}</div>
          <div className="tweet-media">
            {tweet.media.map((media, index) =>
              media.type === "jpg" ? (
                <div
                  id="image-container"
                  key={index}
                  className={tweetMediaOneElement()}
                  onClick={() => setSliderPopup(true)}
                >
                  <img src={media.url} alt="foto" />
                </div>
              ) : (
                <div className="image-container" key={index}>
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
