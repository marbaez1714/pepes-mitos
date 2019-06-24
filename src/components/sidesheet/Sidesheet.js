import React from "react";
import ReactDom from "react-dom";
import "./sheet-styles.scss";

function SideSheetContent(props) {
  return (
    <div className="overlay">
      <div>
        <span>test</span>
      </div>
    </div>
  );
}

export default function Sidesheet() {
  return ReactDom.createPortal(SideSheetContent, document.body);
}
