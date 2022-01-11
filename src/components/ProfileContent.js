import React from "react";
import { useMainContext } from "../context";
export default function ProfileContent({ userInfo }) {
  return (
    <div className="profile-container">
      <div className="profile-header"></div>
      <div className="profile-cover">
        <img src={userInfo.coverPhoto}></img>
      </div>
      <div className="profile-content">
        <div className="profile-content-header">
          <div className="profile-photo">
            <img src={userInfo.profilePhoto}></img>
          </div>
          <div className="button-group"></div>
        </div>
        <div className="profile-content-userInfo">
          <h2>{userInfo.name}</h2>
          <p>{userInfo.userName}</p>
          <h5>{userInfo.description}</h5>
          <div className="birthDate">Doğum Tarihi {userInfo.birthDate}</div>
          <div className="follow-info">
            <div className="followers">
              <span>{userInfo.followerCount}</span> follower
            </div>
            <div className="followers">
              <span>{userInfo.followingCount}</span> following
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
