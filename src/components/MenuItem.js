import React from "react";
import "./MenuItem.scss";

export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="menuItem">
      <div className="name">{item.name}</div>
      <div>{item.disc}</div>
    </div>
  );
}
