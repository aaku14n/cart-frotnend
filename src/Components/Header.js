import React from "react";
import "./css/Header.css";
import { Icon } from "../Core/Icon";

export function Header(props) {
  return (
    <header className={"base"}>
      <div className={"logoIcon"}>
        <Icon image="cart.png" size={60} />
      </div>
      <h1 className="headerTitle">CartManege</h1>
    </header>
  );
}
