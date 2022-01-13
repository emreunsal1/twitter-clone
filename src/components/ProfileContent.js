import React, { useState } from "react";
import { ReactComponent as BackIcon } from "./icons/back.svg";
import { ReactComponent as Ballon } from "./icons/balloon.svg";
import { ReactComponent as Expanded } from "./icons/expandedButton.svg";
import ProfilePhoto from "./ProfilePhoto";
import ProfilePopup from "./ProfileEditPopup";

export default function ProfileContent({ userInfo, tweets, loginUser }) {
  const [profilePopupOpened, setProfilePopupOpened] = useState(false);
  const headerClassName =
    loginUser.userName === userInfo.userName ? true : false;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="back-button">
          <BackIcon />
        </div>
        <div className="user-info">
          <h3>{userInfo.name}</h3>
          <p>{tweets.length} Tweet</p>
        </div>
      </div>
      <div className="profile-cover">
        <img src={userInfo.coverPhoto}></img>
      </div>
      <div className="profile-content">
        <div className="profile-content-header">
          <div className="profile-photo">
            <ProfilePhoto size={140} user={userInfo} />
          </div>
          <div className="button-group">
            {headerClassName === true ? (
              <div className="one-button">
                <div
                  className="profile-edit-button"
                  onClick={() => setProfilePopupOpened(true)}
                >
                  Profili Düzenle
                </div>
              </div>
            ) : (
              <div className="four-button">
                <div className="expanded-button">
                  <Expanded />
                </div>
                <div className="follow-button">Takip et</div>
              </div>
            )}
          </div>
        </div>
        <div className="profile-content-userInfo">
          <h2>{userInfo.name}</h2>
          <p>@{userInfo.userName}</p>
          <h5>{userInfo.description}</h5>
          <div className="birthDate">
            <Ballon />
            Doğum tarihi: {userInfo.birthDate}
          </div>
          <div className="follow-info">
            <div className="followers">
              <span>{userInfo.followerCount}</span> Takip edilen
            </div>
            <div className="followers">
              <span>{userInfo.followingCount}</span> Takipçi
            </div>
          </div>
        </div>
      </div>
      <div className="pages">
        <div className="pages-bar">
          <div className="page-name">Tweetler</div>
          <div className="page-name">Tweetler ve yanıtlar</div>
          <div className="page-name">Medya</div>
          <div className="page-name">Beğeni</div>
        </div>
      </div>
      <ProfilePopup
        opened={profilePopupOpened}
        setOpened={setProfilePopupOpened}
      />
    </div>
  );
}
