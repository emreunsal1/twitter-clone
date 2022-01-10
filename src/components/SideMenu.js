import React from "react";
import AgentaContent from "./AgentaContent";
import { ReactComponent as OptinosIcon } from "./icons/options.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as DeleteIcon } from "./icons/deleteIcon.svg";

export default function SideMenu() {
  return (
    <div className="side-menu-container">
      <div className="side-menu-search">
        <div className="svg-container">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Twitter'da Ara"></input>
        <div className="delete-button">
          <DeleteIcon />
        </div>
      </div>
      <div className="agenda-container">
        <div className="agenda-header">
          <h2>Türkiye Gündemdekiler</h2>
          <OptinosIcon />
        </div>
        <div className="agenda-content">
          <AgentaContent text={"Suriyeliler"} />
        </div>
      </div>
    </div>
  );
}
