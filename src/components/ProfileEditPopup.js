import React from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import ProfilePhoto from "./ProfilePhoto";

export default function ProfileEditPopup({ user }) {
  return (
    <div className="popup-container">
      <div className="popup-header"></div>
      <div className="profile-background-photo"></div>
      <div className="profile-photo">
        <div className="photo-container">
          <ProfilePhoto user={user} size={70} />
        </div>
      </div>
      <div className="profile-content">
        <div className="profile-content-text">
          <input type="text" value={user.name}></input>
          <label></label>
        </div>
        <div className="profile-content-text">
          <input type="text" value={user.userName}></input>
          <label></label>
        </div>
        <div className="profile-content-text">
          <input type="text" value={user.description}></input>
          <label></label>
        </div>
        <div className="profile-content-text">
          <input type="text" value={user.birthDate}></input>
          <label></label>
        </div>
      </div>
      <div className="popup-footer">
        <div className="content">
          <p></p>
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}
