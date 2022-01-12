import React from "react";
import ProfilePhoto from "./ProfilePhoto";

export default function Recommended({ user }) {
  return (
    <div className="card">
      <div className="user-info">
        <div className="profile-photo">
          <ProfilePhoto user={user} size={50} />
        </div>
        <div className="user-txt-info">
          <h4>{user.name}</h4>
          <p>@{user.userName}</p>
        </div>
      </div>
      <div className="follow-button">Takip et</div>
    </div>
  );
}
