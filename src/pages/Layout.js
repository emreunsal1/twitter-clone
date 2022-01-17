import React, { useState } from "react";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="main-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">{children}</div>
      <div className="side-menu">
        <SideMenu />
      </div>
    </div>
  );
}
