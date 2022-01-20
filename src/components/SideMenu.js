import React, { useState } from "react";
import AgentaContent from "./AgentaContent";
import Recommended from "./Recommended";
import { useMainContext } from "../context";
import { ReactComponent as OptinosIcon } from "./icons/options.svg";
import { ReactComponent as SearchIcon } from "./icons/search.svg";

export default function SideMenu() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const context = useMainContext();
  const { userInfo, allUsers } = context.user;

  window.addEventListener("scroll", function (e) {
    setScrollPosition(window.scrollY);
  });

  return (
    <div className="side-menu-container" style={{ top: `${scrollPosition}px` }}>
      <div className="side-menu-search">
        <div className="svg-container">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Twitter'da Ara" />
      </div>
      <div className="agenda-container">
        <div className="agenda-header">
          <h3>Türkiye Gündemdekiler</h3>
          <div className="svg-container">
            <OptinosIcon />
          </div>
        </div>
        <div className="agenda-content">
          <AgentaContent
            text={"Suriyeliler"}
            agentaSubject={"Politika"}
            tweetCount={"49"}
          />
          <AgentaContent
            text={"#TrendYol"}
            agentaSubject={"Ekonomi"}
            tweetCount={"100"}
          />
          <AgentaContent
            text={"#dolar"}
            agentaSubject={"Ekonomi"}
            tweetCount={"30"}
          />
          <AgentaContent
            text={"#eğitim"}
            agentaSubject={"Politika"}
            tweetCount={"300"}
          />
          <AgentaContent
            text={"#Emreünsal"}
            agentaSubject={"Yazılım"}
            tweetCount={"600"}
          />
        </div>
        <div className="text">
          <p>Daha Fazla Göster</p>
        </div>
      </div>

      <div className="recommended">
        <div className="header">
          <h3>Kimi Takip Etmeli</h3>
        </div>
        <div className="card-content">
          {allUsers.map(
            (user, index) =>
              user.id !== userInfo.id && <Recommended key={index} user={user} />
          )}
        </div>
        <div className="text">
          <p>Daha Fazla Göster</p>
        </div>
      </div>
    </div>
  );
}
