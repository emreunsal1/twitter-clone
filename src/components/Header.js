import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";
import { useMainContext } from "../context";
import { ReactComponent as HomeIcon } from "./icons/home.svg";

export default function Header() {
  const context = useMainContext();
  const { link } = context.user;
  return (
    <div className="header-container">
      <div className="side-header">
        <div className="header-icon">
          <TwitterIcon />
        </div>
      </div>
      <div className="list">
        <Link>
          <HomeIcon /> Anasayfa
        </Link>
        <Link>Keşfet</Link>
        <Link>Bildirimler</Link>
        <Link>Mesajlar</Link>
        <Link>Yer İşaretleri</Link>
        <Link>Listeler</Link>
        <Link to={link}>Profil</Link>
        <Link>Daha Fazla</Link>
        <Link className="button">Tweetle</Link>
      </div>
      <div className="footer">
        <img src=""></img>
        <div className="user-content">
          <h5></h5>
          <p></p>
        </div>
      </div>
    </div>
  );
}
