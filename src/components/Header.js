import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";
import { useMainContext } from "../context";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ExpandedIcon } from "./icons/expandedButton.svg";
import ProfilePhoto from "./ProfilePhoto";

export default function Header() {
  const context = useMainContext();
  const { link, userInfo } = context.user;
  return (
    <div className="header-container">
      <div className="side-header">
        <div className="header-icon">
          <TwitterIcon />
        </div>
      </div>
      <div className="list">
        <Link to="/main">
          <HomeIcon /> Anasayfa
        </Link>
        <a>Keşfet</a>
        <a>Bildirimler</a>
        <a>Mesajlar</a>
        <a>Yer İşaretleri</a>
        <a>Listeler</a>
        <a onClick={() => link(userInfo)}>Profil</a>
        <a>Daha Fazla</a>
        <div className="button">Tweetle</div>
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
