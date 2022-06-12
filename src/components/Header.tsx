import React, { Component } from "react";
import "../css/Header.css";
import hero from "../images/hero@2x.png";

class Header extends Component {
  alertOn() {
    alert("未実装機能");
  }
  render() {
    return (
      <div className="header">
        <div className="content">
          <div className="title">
            <h1 className="title-h1">
              ビジネスの成長は、
              <br />
              自動化から生まれる。
            </h1>
            <p className="title-p01">
              人にしかできない仕事にフォーカスを当てる。
              <br className="br-none" />
              業務を最適化し、自動化します。
            </p>
          </div>
          <div className="header-img01">
            <img alt="hero" src={hero}></img>
          </div>
          <div className="contact">
            <a href="#" className="contact-a01" onClick={this.alertOn}>
              <div className="contact-btn">
                <div className="contact-text"></div>
                お問い合わせ
                <div className="contact-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="contact-svg01"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </a>
            <div className="coment02">
              <a href="#" onClick={this.alertOn} className="coment01-a01">
                Anyflowとの連携をお考えの方はこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
