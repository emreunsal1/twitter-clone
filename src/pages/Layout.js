import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
import { ReactComponent as OpenMenuIcon } from "../components/icons/openMenu.svg";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        {children}
        <div className="open-mobile-menu">
          <OpenMenuIcon />
        </div>
      </div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  );
}
