import React from "react";
import Slider from "react-slick";
import "../css/UseCases.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import usecaseImg from "../images/usecase1@2x.png";
import ContactBtn from "../mole/ContactBtn";

const UseCases = () => {
  const settings = {
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <div id="usecases" className="usecases">
      <div className="usecases-content01">
        <h1 className="content01-h01">
          ノーコードだから
          <br />
          素早く簡単に自動化
        </h1>
        <p className="content01-p01">
          業務で使うSaaSを連携し、自動化・効率化。
          <br />
          ノーコードで簡単・迅速に作成できて、開発に費やす時間を減らします。
        </p>
      </div>
      <div className="usecases-content02">
        <Slider className="content02-slider" {...settings}>
          <div className="slick-list-item">
            <div className="list00">
              <div>
                <h1 className="list00-h01">
                  把握すべき重要な変化のみを
                  <br />
                  タイムリーにSlackに通知
                </h1>
                <p className="list00-p01">
                  変化を見逃したくないレコードの条件及び通知先を設定すると、条件に該当するレコードの変化が起きた場合のみ、リアルタイムに通知されます。
                </p>
              </div>
              <iframe
                title="把握すべき重要な変化のみをタイムリーにSlackに通知"
                src="https://www.youtube.com/embed/0e_wFjsUiHU"
                className="list00-iframe01"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="slick-list-item">
            <div className="list00">
              <div>
                <h1 className="list00-h01">
                  ToDO漏れやフェーズの停滞を
                  <br />
                  自動でSlackに通知
                </h1>
                <p className="list00-p01">
                  期日を過ぎたToDOや完了予定日が近い商談、フェーズが変化していない商談などを、予め設定した時間やチャンネルに通知することが可能です。
                </p>
              </div>
              <iframe
                title="ToDO漏れやフェーズの停滞を自動でSlackに通知"
                src="https://www.youtube.com/embed/LkaebtLOqHg"
                className="list00-iframe01"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="slick-list-item">
            <div className="list00">
              <div>
                <h1 className="list00-h01">
                  Salesforce上での承認申請を
                  <br />
                  Slackに通知
                </h1>
                <p className="list00-p01">
                  Salesforceの承認プロセスを利用して、承認申請が挙がった場合に必要な関係者にSlackで内容を通知し、そのままSlack上で承認・却下を行えます。
                </p>
              </div>
              <img
                alt="Salesforce上での承認申請をSlackに通知"
                src={usecaseImg}
                className="list00-img01"
              ></img>
            </div>
          </div>
          <div className="slick-list-item">
            <div className="list00">
              <div>
                <h1 className="list00-h01">
                  オンライン商談に必要な
                  <br />
                  一連の作業を自動化
                </h1>
                <p className="list00-p01">
                  Salesforceで商談が作成されたら、カレンダーにも予定が登録され、オンライン商談の場合は当日のZoomの発行、先方へのメール連絡まで自動完結します。
                </p>
              </div>
              <iframe
                title="オンライン商談に必要な一連の作業を自動化"
                src="https://www.youtube.com/embed/9d6jGkn7PZs"
                className="list00-iframe01"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="slick-list-item">
            <div className="list00">
              <div>
                <h1 className="list00-h01">
                  商談情報を元にクラウドサインで
                  <br />
                  申込書を自動作成・送信
                </h1>
                <p className="list00-p01">
                  Salesforceで商談フェーズ等が予め設定した条件になったら、商談情報を元にクラウドサインで自動で申込書を作成し、送付まで完結することが可能です。
                </p>
              </div>
              <iframe
                title="商談情報を元にクラウドサインで申込書を自動作成・送信"
                src="https://www.youtube.com/embed/rNqUZT7XCac"
                className="list00-iframe01"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Slider>
        <ContactBtn></ContactBtn>
      </div>
    </div>
  );
};

export default UseCases;
