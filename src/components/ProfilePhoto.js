import React from "react";
import { useMainContext } from "../context";

export default function ProfilePhoto({ user, size }) {
  const context = useMainContext();
  const { link } = context.user;
  return (
    <div
      className="profile-photo-container"
      style={{ height: size, width: size }}
    >
      <img src={user.profilePhoto} onClick={() => link(user)}></img>
    </div>
  );
}
