import React, { useState } from "react";
import menu from "./pm-menu.json";
import guyHead from "../../images/guyhead.png";
import "./menu-styles.scss";

const guyStamp = <img className="guyHead" src={guyHead} alt="Guy Stamp" />;
const guyFeature = <p className="dddFeature">Featured on Guy's Triple D</p>;
const brunchHours = <p className="brunch">Served Saturday & Sunday, 11am - 5pm.</p>;
const kidsAge = <p className="kids">12 & Under.</p>;
const lunchDetails = (
  <React.Fragment>
    <p className="lunch">All served with rice & beans.</p>
    <p className="lunchTime">Monday - Friday : 11am - 3pm</p>
  </React.Fragment>
);
const lunchRules = (
  <React.Fragment>
    <p className="lunch">Lunch specials are dine-in only.</p>
    <p className="lunchRule">all substitutions & carry-out cost extra.</p>
  </React.Fragment>
);

const MenuItem = props => {
  const { color, name, open, handleClick, menuSection } = props;
  return (
    <div className="menuItemWrapper">
      <div className={`menuItem ${color} ${open ? "open" : ""}`} onClick={handleClick}>
        <span className="menuTitle">{name}</span>
      </div>
      <div className={`menuContent ${open ? "open" : ""}`}>
        {open && name === "Lunch Specialties" && lunchDetails}
        {open && name === "Brunch" && brunchHours}
        {open && name === "Kids" && kidsAge}
        {open && menuSection.map(dish => <Food key={dish.name} dish={dish} />)}
        {open && name === "Lunch Specialties" && lunchRules}
      </div>
    </div>
  );
};

const Food = props => {
  const { dish } = props;
  const { name, options, desc, ddd } = dish;
  return (
    <div className="food">
      <p className="name">{name}</p>
      {ddd && guyFeature}
      <div className={`detailWrapper ${ddd ? "ddd" : ""}`}>
        <p className={`description ${ddd ? "ddd" : ""}`}>{desc}</p>
        {options && (
          <ul className={`options ${ddd ? "ddd" : ""}`}>
            {options.map(option => (
              <li key={name + option}>{option}</li>
            ))}
          </ul>
        )}
        {ddd && guyStamp}
      </div>
    </div>
  );
};

export default function Menu(props) {
  const [menuKey, setMenuKey] = useState(null);
  const handleChange = key => (menuKey === key ? setMenuKey(null) : setMenuKey(key));
  return (
    <div className="menu">
      <MenuItem
        color="yellow"
        name="Appetizers"
        menuSection={menu.appetizers}
        open={menuKey === "Appetizers"}
        handleClick={() => handleChange("Appetizers")}
      />
      <MenuItem
        color="blue"
        name="Soups & Salads"
        menuSection={menu.soups}
        open={menuKey === "Soups"}
        handleClick={() => handleChange("Soups")}
      />
      <MenuItem
        color="orange"
        name="House Specialties"
        menuSection={menu.house}
        open={menuKey === "House"}
        handleClick={() => handleChange("House")}
      />
      <MenuItem
        color="green"
        name="Mex-Tex"
        menuSection={menu.mexTex}
        open={menuKey === "Mex-Tex"}
        handleClick={() => handleChange("Mex-Tex")}
      />
      <MenuItem
        color="red"
        name="Brunch"
        menuSection={menu.brunch}
        open={menuKey === "Brunch"}
        handleClick={() => handleChange("Brunch")}
      />
      <MenuItem
        color="green-light"
        name="Signature Tacos"
        menuSection={menu.tacos}
        open={menuKey === "Signature"}
        handleClick={() => handleChange("Signature")}
      />
      <MenuItem
        color="yellow"
        name="Lunch Specialties"
        menuSection={menu.lunch}
        open={menuKey === "Lunch"}
        handleClick={() => handleChange("Lunch")}
      />
      <MenuItem
        color="blue"
        name="Kids"
        menuSection={menu.kids}
        open={menuKey === "Kids"}
        handleClick={() => handleChange("Kids")}
      />
      <MenuItem
        color="pink"
        name="Drinks & Desserts"
        menuSection={menu.desserts}
        open={menuKey === "Drinks"}
        handleClick={() => handleChange("Drinks")}
      />
    </div>
  );
}
