import React from "react";
import { ReactComponent as Expanded } from "./icons/expandedButton.svg";

export default function AgentaContent({ text, tweetCount, agentaSubject }) {
  return (
    <div className="agenda-card">
      <div className="header">
        <p>{agentaSubject}-Gündemdekiler</p>
        <div className="svg-container">
          <Expanded />
        </div>
      </div>
      <h4>{text}</h4>
      <p>{tweetCount} B Tweet</p>
    </div>
  );
}
