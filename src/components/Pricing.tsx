import React from "react";
import Slider from "react-slick";
import "../css/Pricing.css";
import MediaQuery from "react-responsive";

import nikkeiImg from "../images/media/nikkei.svg";
import techcrunchImg from "../images/media/techcrunch.png";
import bridgeImg from "../images/media/bridge.svg";
import forbesImg from "../images/media/forbes.png";
import asciiImg from "../images/media/ascii.jpeg";
import exciteImg from "../images/media/excite.svg";
import careerhackImg from "../images/media/careerhack.svg";
import seleckImg from "../images/media/seleck.jpeg";
import footerIllustimg from "../images/footer_illust@2x.png";

import grayLogoimg from "../images/gray-logo.svg";
import ISMSImg from "../images/ISMS_ANAB_ISMS-AC@2x.jpg";
const alertOn = () => {
  alert("未実装機能");
};
const Pricing = () => {
  const spanStyle01 = {
    fontSize: "0.6em",
  };
  const spanStyle02 = {
    fontSize: "0.5em",
    marginRight: "4px",
  };
  const itemStyle01 = {
    padding: "48px 32px",
  };
  const itemStyle01Mobile = {
    padding: "24px 16px",
  };
  const pStyle01 = {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "1",
  };
  const pStyle01Mobile = {
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "1",
  };
  const pStyle02 = {
    fontWeight: "800",
    fontSize: "66px",
    lineHeight: "1.8",
    marginTop: "-0.3em",
  };
  const pStyle02Mobile = {
    fontWeight: "800",
    fontSize: "36px",
    lineHeight: "1.8",
    marginTop: "-0.3em",
  };
  const settings = {
    initialSlide: 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: false,
    centerPadding: "16px",
  };
  return (
    <div>
      {/* 料金プラン */}
      <div id="pricing" className="pricing">
        <h1 className="pricing-h01">料金プラン</h1>
        <MediaQuery query="(min-width: 767px)">
          <div className="pricing-list">
            {/* プラン１ */}
            <div>
              <div className="pricing-list-item01">
                <div className="pricing-list-item01-header">
                  <p className="pricing-list-item01-header-p01">
                    スターター
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01}>
                    <p style={pStyle01}>月額基本料金</p>
                    <p style={pStyle02}>
                      <span style={spanStyle02}>¥</span>30,000
                    </p>

                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">3,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">1</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">1</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">なし</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* プラン２ */}
            <div>
              <div className="pricing-list-item02">
                <div className="pricing-list-item02-header">
                  <p className="pricing-list-item01-header-p01">
                    ベーシック
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01}>
                    <p style={pStyle01}>月額基本料金</p>
                    <p style={pStyle02}>
                      <span style={spanStyle02}>¥</span>60,000
                    </p>
                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn02">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">10,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">10</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">10</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">あり</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* プラン３ */}
            <div>
              <div className="pricing-list-item01">
                <div className="pricing-list-item01-header">
                  <p className="pricing-list-item01-header-p01">
                    スタンダード
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01}>
                    <p style={pStyle01}>月額基本料金</p>
                    <p style={pStyle02}>
                      <span style={spanStyle02}>¥</span>100,000
                    </p>
                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">50,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">無制限</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">応相談</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">あり</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <Slider className="pricing-slider" {...settings}>
            {/* プラン１ */}
            <div className="pricing-list-item01">
              <div className="pricing-list-item01-size">
                <div className="pricing-list-item01-header">
                  <p className="pricing-list-item01-header-p01">
                    スターター
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01Mobile}>
                    <p style={pStyle01Mobile}>月額基本料金</p>
                    <p style={pStyle02Mobile}>
                      <span style={spanStyle02}>¥</span>30,000
                    </p>
                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">3,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">1</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">1</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">なし</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* プラン２ */}
            <div className="pricing-list-item02">
              <div className="pricing-list-item01-size">
                <div className="pricing-list-item02-header">
                  <p className="pricing-list-item01-header-p01">
                    ベーシック
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01Mobile}>
                    <p style={pStyle01Mobile}>月額基本料金</p>
                    <p style={pStyle02Mobile}>
                      <span style={spanStyle02}>¥</span>60,000
                    </p>
                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn02">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">10,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">10</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">10</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">あり</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            {/* プラン３ */}
            <div className="pricing-list-item01">
              <div className="pricing-list-item01-size">
                <div className="pricing-list-item01-header">
                  <p className="pricing-list-item01-header-p01">
                    スタンダード
                    <span style={spanStyle01}>プラン</span>
                  </p>
                </div>
                <div className="pricing-list-body">
                  <div style={itemStyle01Mobile}>
                    <p style={pStyle01Mobile}>月額基本料金</p>
                    <p style={pStyle02Mobile}>
                      <span style={spanStyle02}>¥</span>100,000
                    </p>
                    <a
                      href="#"
                      className="pricing-contact-a01"
                      onClick={alertOn}
                    >
                      <div className="pricing-contact-btn">
                        <div className="pricing-contact-text"></div>{" "}
                        お問い合わせ
                        <div className="pricing-contact-arrow">
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
                  <hr className="pricing-hr01"></hr>
                  <dl>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">契約期間</dt>
                      <dd className="pricing-dd01">12ヶ月</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">
                        ワークフロー実行回数上限（月）
                      </dt>
                      <dd className="pricing-dd01">50,000</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用可能ユーザー数</dt>
                      <dd className="pricing-dd01">無制限</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">利用ワークスペース数</dt>
                      <dd className="pricing-dd01">応相談</dd>
                    </div>
                    <div className="pricing-info">
                      <dt className="pricing-dt01">権限管理</dt>
                      <dd className="pricing-dd01">あり</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Slider>
        </MediaQuery>
      </div>
      {/* メディア */}
      <div id="media" className="media">
        <h1 className="pricing-h01">メディア掲載</h1>
        <div className="media-content">
          <ul className="media-ltems">
            <li className="media-item01">
              <img src={nikkeiImg} alt="日経" className="media-img"></img>
            </li>
            <li className="media-item01">
              <img
                src={techcrunchImg}
                alt="TechCrunch"
                className="media-img"
              ></img>
            </li>
            <li className="media-item01">
              <img src={bridgeImg} alt="BRIDGE" className="media-img"></img>
            </li>
            <li className="media-item01">
              <img src={forbesImg} alt="Forbes" className="media-img"></img>
            </li>
            <li className="media-item01">
              <img src={asciiImg} alt="ASCII" className="media-img"></img>
            </li>
            <li className="media-item01">
              <img src={exciteImg} alt="Excite" className="media-img"></img>
            </li>
            <li className="media-item01">
              <img
                src={careerhackImg}
                alt="キャリアハック"
                className="media-img"
              ></img>
            </li>
            <li className="media-item01">
              <img src={seleckImg} alt="SELECK" className="media-img"></img>
            </li>
          </ul>
        </div>
      </div>
      {/* 最後に */}
      <div className="last">
        <div className="last-content">
          <h1 className="last-content-h01">
            Anyflow は<br />
            人の"時間"を創ります
          </h1>
          <p className="last-content-p01">
            Anyflow は単純業務の時間を減らし、人にしかできない仕事の
            <br />
            時間を創ることで、ビジネスの成長を加速させます。
          </p>
          <img src={footerIllustimg} className="last-content-img"></img>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <img
            src={grayLogoimg}
            alt="Anyflow"
            className="footer-content-img"
          ></img>
          <ul className="footer-content-ul01">
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                運営会社
              </a>
            </li>
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                利用規約
              </a>
            </li>
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                プライバシーポリシー
              </a>
            </li>
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                情報セキュリティ方針
              </a>
            </li>
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                公式ブログ
              </a>
            </li>
            <li className="footer-content-li01">
              <a href="#" className="footer-content-a01" onClick={alertOn}>
                Anyflowとの連携をお考えの方はこちら
              </a>
            </li>
          </ul>
          <div className="footer-content-CertificationMark">
            <img
              src={ISMSImg}
              alt="ISMS認証画像"
              className="CertificationMark-img"
            ></img>
            <div>認証番号: IS751085</div>
          </div>
          <small className="footer-content-small01">© 2020 Anyflow Inc.</small>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
