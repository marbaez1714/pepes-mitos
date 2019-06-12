import React, { useState } from "react";
import MenuItem from "./MenuItem";
import menu from "./menu.json";
import "./MenuSection.scss";

export default function MenuSection(props) {
  const [menuKey, setMenuKey] = useState(1);
  console.log(menu);
  return (
    <div className={`parallaxSection menuContainer ${menuKey}`}>
      <div className="menuHeader">
        <div className={`section blue ${menuKey === 1 && "active"}`} onClick={() => setMenuKey(1)}>
          Appetizers, Soups, & Salads
        </div>
        <div
          className={`section orange ${menuKey === 2 && "active"}`}
          onClick={() => setMenuKey(2)}
        >
          House Specials & Mex-Tex
        </div>
        <div className={`section green ${menuKey === 3 && "active"}`} onClick={() => setMenuKey(3)}>
          Signature Tacos
        </div>
        <div className={`section red ${menuKey === 4 && "active"}`} onClick={() => setMenuKey(4)}>
          Brunch & Lunch Specials
        </div>
        <div className={`section pink ${menuKey === 5 && "active"}`} onClick={() => setMenuKey(5)}>
          Kids
        </div>
        <div className={`section teal ${menuKey === 6 && "active"}`} onClick={() => setMenuKey(6)}>
          Drinks & Desserts
        </div>
      </div>
      <div className="menuBody">
        <div className="menu">
          {menu.map((item, idx) => (
            <MenuItem item={item} key={item.name + idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
