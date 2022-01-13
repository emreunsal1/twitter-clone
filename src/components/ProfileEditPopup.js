import React, { useState } from "react";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import ProfilePhoto from "./ProfilePhoto";
import { ReactComponent as DeleteIcon } from "./icons/deleteIcon.svg";
import { useMainContext } from "../context";
import { userFields } from "../constants";

export default function ProfileEditPopup({ opened, setOpened }) {
  const context = useMainContext();
  const { userInfo, setUserInfo } = context.user;
  const [user, setUser] = useState({});

  const updateUser = (field, value) => {
    setUser({ ...user, [field]: value });
  };
  console.log(user);

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
                value={userInfo.name}
                onChange={(e) => updateUser(userFields.name, e.target.value)}
              />
              <label>İsim</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                name="userName"
                value={userInfo.userName}
                required
                onChange={(e) =>
                  updateUser(userFields.userName, e.target.value)
                }
              ></input>
              <label>Kullanıcı Adı</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="description"
                onChange={(e) =>
                  updateUser(userFields.description, e.target.value)
                }
              ></input>
              <label>Kişisel Bilgiler</label>
            </div>
            <div className="profile-content-text">
              <input
                type="text"
                required
                name="birthDate"
                onChange={(e) =>
                  updateUser(userFields.birthDate, e.target.value)
                }
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
