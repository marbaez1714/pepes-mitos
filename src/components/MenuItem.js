import React from "react";
import "./MenuItem.scss";

export default function MenuItem(props) {
  const { item } = props;
  return (
    <div className="menuItemContainer">
      <span className="menuItemName">
        <i class="fas fa-plus menuItem " />
        {item.name}
      </span>
      <div className="menuItemDisc">{item.disc}</div>
    </div>
  );
}
