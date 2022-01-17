import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../context";

import ProfilePhoto from "./ProfilePhoto";

import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ExpandedIcon } from "./icons/expandedButton.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";
import { ReactComponent as Hastag } from "./icons/hastag.svg";
import { ReactComponent as Call } from "./icons/call.svg";
import { ReactComponent as Message } from "./icons/message.svg";
import { ReactComponent as Save } from "./icons/save.svg";
import { ReactComponent as List } from "./icons/list.svg";
import { ReactComponent as ProfileIcon } from "./icons/profile.svg";
import { ReactComponent as More } from "./icons/more.svg";

export default function Header() {
  const context = useMainContext();
  const { link, userInfo } = context.user;
  const { setTweetPopup, tweetPopup } = context.popup;
  return (
    <div className="header-container">
      <div className="side-header">
        <div className="header-icon">
          <TwitterIcon />
        </div>
      </div>
      <div className="list">
        <Link to="/main">
          <HomeIcon />
          <p>Anasayfa</p>
        </Link>
        <a>
          <Hastag />
          <p>Keşfet </p>
        </a>
        <a>
          <Call />
          <p>Bildirimler </p>
        </a>
        <a>
          <Message />
          <p>Mesajlar </p>
        </a>
        <a>
          <Save />
          <p>İşaretleri</p>
        </a>
        <a>
          <List />
          <p>Listeler</p>
        </a>
        <a onClick={() => link(userInfo)}>
          <ProfileIcon />
          <p> Profil</p>
        </a>
        <a>
          <More /> Daha Fazla
        </a>
        <div className="button" onClick={() => setTweetPopup(true)}>
          Tweetle
        </div>
      </div>
      <div className="footer-container">
        <div className="footer">
          <div className="user-info">
            <div className="profile-photo">
              <ProfilePhoto user={userInfo} size={55} />
            </div>
            <div className="user-content">
              <h5>{userInfo.name}</h5>
              <p>@{userInfo.userName}</p>
            </div>
          </div>
          <div className="icon">
            <ExpandedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
