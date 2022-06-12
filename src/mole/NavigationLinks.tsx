import React from "react";

type ToolItem = {
  linkPath: string;
  displayText: string;
};
type ToolBtn = {
  linkPath: string;
  displayText: string;
};
const alertOn = () => {
  alert("未実装機能");
};
const NavigationLinks = (props: { textList: ToolItem[]; toolBtn: ToolBtn }) => {
  return (
    <div>
      <nav>
        <ul className="menu">
          {props.textList.map((item: ToolItem) => {
            return (
              <li className="menu-tab">
                <a href={item.linkPath} className="tab-a-type01">
                  {item.displayText}
                </a>
              </li>
            );
          })}
          <li className="menu-tab">
            <a
              href={props.toolBtn.linkPath}
              className="tab-a-type02"
              onClick={alertOn}
            >
              {props.toolBtn.displayText}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationLinks;
