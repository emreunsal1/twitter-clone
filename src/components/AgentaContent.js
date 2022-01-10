import React from "react";
import { ReactComponent as Expanded } from "./icons/expandedButton.svg";

export default function AgentaContent({ text }) {
  return (
    <div className="agente-card">
      <div className="header">
        <p>Gündemdekiler</p>
        <Expanded />
      </div>
      <h2>{text}</h2>
      <p>10000</p>
    </div>
  );
}
