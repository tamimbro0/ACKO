import React from "react";
import "./AppsLink.css";

import happylind from "../../assets/happylind.jpg";
import playstore from "../../assets/playstore.png";
import appStore from "../../assets/appStore.jpg";
import AckoQR from "../../assets/AckoQR.jpg";

import StarRateIcon from "@mui/icons-material/StarRate";

const AppsLink = () => {
  return (
    <div className="AppsLinkDiv">
      {/* Left - Happy Client Image */}
      <div className="happyClientDiv">
        <div className="happyClientDivImgTital">
          <img src={happylind} alt="Happy client" className="happyClientDivImg" />
          <div className="happyClientDivTital">
            Get India's #1 <br /> insurance app <br />
            <span className="happyClientDivSpan">12+ million app downloads</span>
          </div>
        </div>
      </div>

      {/* Right - Store Link Card */}
      <div className="storeLinkDiv">
        <div className="storeLinkDivDeatils">
          <div className="storeLinkDivTile">Scan to download our app</div>
          <div className="storeLinkDivParagrap">For iOS and Android</div>
        </div>

        <div className="StoreDiv">
          {/* Play Store */}
          <div className="StoreDivPalyStoe">
            <div className="StoreDivPalyStoeImg">
              <img src={playstore} alt="Play Store" className="imgStoreDivPalyStoeImg" />
            </div>
            <div className="StoreDivPalyStoeRating">
              <div className="StoreDivPalyStoeRatingNumber">
                4.6 <StarRateIcon />
              </div>
              <div className="StoreDivPalyStoeRatingTital">Play Store rating</div>
            </div>
          </div>

          {/* App Store */}
          <div className="StoreDivPalyStoe">
            <div className="StoreDivPalyStoeImg">
              <img src={appStore} alt="App Store" className="imgStoreDivAppStoeImg" />
            </div>
            <div className="StoreDivPalyStoeRating">
              <div className="StoreDivPalyStoeRatingNumber">
                4.6 <StarRateIcon />
              </div>
              <div className="StoreDivPalyStoeRatingTital">App Store rating</div>
            </div>
          </div>

          {/* QR Code */}
          <div className="qrCodDiv">
            <img src={AckoQR} alt="Scan QR Code" className="qrCodDivImg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppsLink;
