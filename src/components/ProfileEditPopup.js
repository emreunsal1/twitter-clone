import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import ProfilePhoto from "./ProfilePhoto";
import { ReactComponent as DeleteIcon } from "./icons/deleteIcon.svg";
import { useMainContext } from "../context";

export default function ProfileEditPopup({ opened, setOpened }) {
  const context = useMainContext();
  const { userInfo, editUserInfo } = context.user;
  const [editUser, setEditUser] = useState(userInfo);

  const onInputChange = (event) => {
    setEditUser({ ...editUser, [event.target.name]: event.target.value });
  };

  const onSaveProfile = () => {
    editUserInfo(editUser);
    setOpened(false);
  };

  if (!opened) {
    return null;
  }

  return (
    <div className="profile-popup">
      <div className="popup-container">
        <div className="popup-header">
          <div className="header-left" onClick={() => setOpened(false)}>
            <div className="delete-icon">
              <DeleteIcon />
            </div>
            <h3>Profili Düzenle</h3>
          </div>

          <div className="save-button" onClick={onSaveProfile}>
            Kaydet
          </div>
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
                value={editUser.name}
                onChange={onInputChange}
              />
              <label>İsim</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                name="userName"
                value={editUser.userName}
                onChange={onInputChange}
                required
              ></input>
              <label>Kullanıcı Adı</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="description"
                value={editUser.description}
                onChange={onInputChange}
              ></input>
              <label>Kişisel Bilgiler</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="birthDate"
                value={editUser.birthDate}
                onChange={onInputChange}
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
