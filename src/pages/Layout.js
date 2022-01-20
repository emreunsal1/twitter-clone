import React from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useMainContext } from "../context";

import { ReactComponent as HomeIcon } from "../components/icons/home.svg";
import { ReactComponent as Call } from "../components/icons/call.svg";
import { ReactComponent as Message } from "../components/icons/message.svg";
import { ReactComponent as ProfileIcon } from "../components/icons/profile.svg";

export default function Layout({ children }) {
  const context = useMainContext();
  const { link, userInfo } = context.user;

  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {children}
        <div className="open-mobile-menu">
          <Link to="/main">
            <HomeIcon />
          </Link>
          <a>
            <Call />
          </a>
          <a>
            <Message />
          </a>
          <a onClick={() => link(userInfo)}>
            <ProfileIcon />
          </a>
        </div>
      </div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  );
}
