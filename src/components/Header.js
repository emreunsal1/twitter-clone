import React from "react";
import { Link } from "react-router-dom";
import { useMainContext } from "../context";

import ProfilePhoto from "./ProfilePhoto";

import {
  Call,
  ExpandedIcon,
  Hastag,
  HomeIcon,
  List,
  Message,
  More,
  ProfileIcon,
  Save,
  TwitterIcon,
} from "./icons";

export default function Header() {
  const context = useMainContext();
  const { link, userInfo } = context.user;
  const { setTweetPopup } = context.popup;
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
