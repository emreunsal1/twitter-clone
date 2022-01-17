import React from "react";

export default function PopupMenu({ setPopupOpened, items, isOpened, style }) {
  if (!isOpened) {
    return null;
  }
  return (
    <div className={"popup-menu"} style={style}>
      <div className="popup-menu-container">
        {items.map((item, index) => (
          <div key={index} onClick={() => setPopupOpened(false)}>
            <div
              className="menu-item"
              style={{ color: item.iconColor }}
              onClick={item.onClick}
            >
              <div className="icon">{item.icon}</div>
              <div className="text">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
