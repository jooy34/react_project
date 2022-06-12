import React from "react";
import ContactBtn from "../mole/ContactBtn";
import "../css/Features.css";
import featuresImg from "../images/feature1@2x.png";
import featuresImg2 from "../images/feature2@2x.png";
import featuresImg3 from "../images/feature3@2x.png";

const Features = () => {
  return (
    <div id="features" className="features">
      <h1 className="features-h01">Anyflowの特徴</h1>
      <h2 className="features-h02">さあビジネスの自動化を始めよう</h2>
      <div className="features-content">
        <div className="content01">
          <div className="content01-child01">
            <img className="features-img" src={featuresImg}></img>
          </div>
          <div className="content00-child02">
            <div className="content01-child02-div01">
              <span className="features-span01">01</span>
              <h2 className="features-h03">
                ノーコードで
                <br />
                業務で使うSaaSを連携
              </h2>
            </div>
            <p className="features-p01">
              連携したいSaaSを選び、必要なアクションをGUIで設定するだけ。プログラミング不要のため、エンジニア以外でも連携させることが可能です。
            </p>
          </div>
        </div>
        <div className="content02">
          <div className="content02-child01">
            <img className="features-img" src={featuresImg2}></img>
          </div>
          <div className="content00-child02">
            <div className="content02-child02-div01">
              <span className="features-span01">02</span>
              <h2 className="features-h03 ">
                素早く簡単に
                <br />
                業務プロセスの変更も楽楽
              </h2>
            </div>
            <p className="features-p01">
              開発するリソースや時間がないと諦めていた連携も、Anyflowなら簡単に。急な業務プロセスの変更への対応も、クリック＆入力で楽楽。
            </p>
          </div>
        </div>
        <div className="content03">
          <div className="content03-child01">
            <img className="features-img" src={featuresImg3}></img>
          </div>
          <div className="content00-child02">
            <div className="content02-child02-div01">
              <span className="features-span01">03</span>
              <h2 className="features-h03 ">
                API連携だから
                <br />
                メンテナンスの必要なし
              </h2>
            </div>
            <p className="features-p01">
              Anyflowは各SaaSが提供するAPIと連携するiPaaS。仕様変更の影響を受けやすいRPAと違い、ワークフローは止まりません。
            </p>
          </div>
        </div>
        <ContactBtn></ContactBtn>
      </div>
    </div>
  );
};

export default Features;
