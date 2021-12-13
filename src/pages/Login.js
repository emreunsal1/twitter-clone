import React, { useContext, useState } from "react";
import { mainContext } from "../context";

export default function Login() {
  const context = useContext(mainContext);
  const userInfo = (e) => {
    e.preventDefault();
    console.log(e);
    context.user.setuserInfo(e.target);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          userInfo(e);
        }}
      >
        <input name="userName" type="text"></input>
        <input name="password" type="text"></input>
        <button name="button" type="submit">
          Giriş
        </button>
      </form>
    </div>
  );
}
