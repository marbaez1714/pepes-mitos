import React, { useState } from "react";
import "./MenuSection.scss";

export default function MenuSection(props) {
  const [menuKey, setMenuKey] = useState("lunchSpecials");

  return (
    <div className={`parallaxSection menuContainer ${menuKey}`}>
      <div className="menuHeader">
        <div
          className={`menuSection appetizers ${menuKey === "appetizers" ? "active" : ""}`}
          onClick={() => setMenuKey("appetizers")}
        >
          Appetizers
        </div>
        <div
          className={`menuSection soupsSalads ${menuKey === "soupsSalads" ? "active" : ""}`}
          onClick={() => setMenuKey("soupsSalads")}
        >
          Soups / Salads
        </div>
        <div
          className={`menuSection houseSpecials ${menuKey === "houseSpecials" ? "active" : ""}`}
          onClick={() => setMenuKey("houseSpecials")}
        >
          House Specials
        </div>
        <div
          className={`menuSection mexTex ${menuKey === "mexTex" ? "active" : ""}`}
          onClick={() => setMenuKey("mexTex")}
        >
          Mex-Tex
        </div>
        <div
          className={`menuSection signatureTacos ${menuKey === "signatureTacos" ? "active" : ""}`}
          onClick={() => setMenuKey("signatureTacos")}
        >
          Signature Tacos
        </div>
        <div
          className={`menuSection lunchSpecials ${menuKey === "lunchSpecials" ? "active" : ""}`}
          onClick={() => setMenuKey("lunchSpecials")}
        >
          Lunch Specails
        </div>
        <div
          className={`menuSection brunch ${menuKey === "brunch" ? "active" : ""}`}
          onClick={() => setMenuKey("brunch")}
        >
          Brunch
        </div>
        <div
          className={`menuSection other ${menuKey === "other" ? "active" : ""}`}
          onClick={() => setMenuKey("other")}
        >
          Kids / Desserts
        </div>
      </div>
      {menuKey}
    </div>
  );
}
