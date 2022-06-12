import React, { Component } from "react";
import logo from "../images/logo.png";
import "../css/ToolBar.css";
import ImageLink from "../mole/ImageLink";
import NavigationLinks from "../mole/NavigationLinks";
import MediaQuery from "react-responsive";

// type定義
type ToolItem = {
  linkPath: string;
  displayText: string;
};
type ToolBtn = {
  linkPath: string;
  displayText: string;
};
// toolBarテキスト
const toolItems: ToolItem[] = [
  { linkPath: "#usecases", displayText: "Anyflowとは" },
  { linkPath: "#features", displayText: "特徴" },
  { linkPath: "#apps", displayText: "SaaS一覧" },
  { linkPath: "#pricing", displayText: "料金プラン" },
];
const toolBtn: ToolBtn = {
  linkPath: "/signin",
  displayText: "サインイン",
};

class ToolBar extends Component {
  render() {
    return (
      <div className="toolBar">
        <div className="toolBar-content">
          <ImageLink linkPath="#" imgPath={logo}></ImageLink>
          <MediaQuery query="(min-width: 767px)">
            <NavigationLinks
              textList={toolItems}
              toolBtn={toolBtn}
            ></NavigationLinks>
          </MediaQuery>
        </div>
      </div>
    );
  }
}

export default ToolBar;
