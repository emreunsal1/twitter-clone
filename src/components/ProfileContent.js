import React from "react";
import { useMainContext } from "../context";
export default function ProfileContent() {
  const context = useMainContext();
  const { userInfo } = context.user;
  return (
    <div>
      <ul>
        <li>{userInfo.name}</li>
        <li>{userInfo.birthDate}</li>
        <li>{userInfo.userName}</li>
      </ul>
    </div>
  );
}
