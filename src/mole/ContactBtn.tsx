import React from "react";
import "../App.css";

const ContactBtn = () => {
  const alertOn = () => {
    alert("未実装機能");
  };
  return (
    <div className="common-contact">
      <div className="common-contact-child">
        <div>
          <a href="#" className="contact-a01" onClick={alertOn}>
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
        </div>
      </div>
    </div>
  );
};

export default ContactBtn;
