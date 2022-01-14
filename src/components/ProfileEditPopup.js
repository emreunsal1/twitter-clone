import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import ProfilePhoto from "./ProfilePhoto";
import { ReactComponent as DeleteIcon } from "./icons/deleteIcon.svg";
import { useMainContext } from "../context";
import { userFields } from "../constants";

export default function ProfileEditPopup({ opened, setOpened }) {
  const context = useMainContext();
  const { userInfo, setUserInfo, editUserInfo } = context.user;

  if (!opened) {
    return null;
  }

  return (
    <div className="profile-popup">
      <div className="popup-container">
        <div className="popup-header">
          <div className="header-left">
            <div className="delete-icon" onClick={() => setOpened(false)}>
              <DeleteIcon />
            </div>
            <h3>Profili Düzenle</h3>
          </div>

          <div className="save-button">Kaydet</div>
        </div>
        <div className="profile-background-photo">
          <img src={userInfo.coverPhoto}></img>
        </div>
        <div className="profile-photo">
          <div className="photo-container">
            <ProfilePhoto user={userInfo} size={140} />
          </div>
        </div>
        <div className="profile-content">
          <form>
            <div className="profile-content-text">
              <input
                type="text"
                name="name"
                required
                value={userInfo.name}
                onChange={(e) => editUserInfo(e)}
              />
              <label>İsim</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                name="userName"
                value={userInfo.userName}
                onChange={(e) => editUserInfo(e)}
                required
              ></input>
              <label>Kullanıcı Adı</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="description"
                value={userInfo.description}
                onChange={(e) => editUserInfo(e)}
              ></input>
              <label>Kişisel Bilgiler</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="birthDate"
                value={userInfo.birthDate}
                onChange={(e) => editUserInfo(e)}
              ></input>
              <label>Doğum Tarihi</label>
            </div>
          </form>
        </div>
        <div className="popup-footer">
          <div className="content">
            <p>Profosyonel Profile Geç</p>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
