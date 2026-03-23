import React from "react";
import "./Trust.css";

import Claimvideo from "../../assets/Claimvideo.mp4";

export default function Trust() {
  return (
    <div className="trustDiv">
      <div className="trustTital">Your trust isn’t assumed, its earned</div>

      <div className="trustRstingDiv">
        <div className="trustminsDiv">
          <div className="trustTimeTital">7 mins</div>
          <div className="trustTimeParagrap">Fastest claim settlement</div>
        </div>

        <div className="trustClaimsDiv">
          <div className="trustPersintNumber">98.8%</div>
          <div className="trustClaimsPragrap">Claims settled in 1 week</div>
        </div>

        <div className="trustSupportDiv">
          <div className="trustSuppertNumber">24x7</div>
          <div className="trustSuppertPragrap">Instant claims support</div>
        </div>
      </div>

      <div className="trustSupportDivA">
        <div className="trustSupportDivContainer">
          <div className="trustSupportDivTital">Claims shouldn't be hard</div>

          <div className="trustSupportDivVideo">
            <video
              autoPlay
              muted
              loop
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              className="vedioClaime"
            >
              <source src={Claimvideo}></source>
            </video>
          </div>
        </div>

        <div className="PromisesDiv">
          <div className="PromisesDivContainer">
            <div className="PromisesDivTital">
              Promises made. Promises kept.
            </div>
            <div className="PromisesDivStar">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</div>

            <div className="PromisesDivPragrap">
              I recently switched to ACKO Insurance and I'm thoroughly
              impressed! Their app is incredibly user-friendly, making it easy
              to purchase and manage policies. The claims process is also
              seamless and hassle-free.
            </div>

            <div className="PromisesDivCustomerProfilDiv">
              <div className="customerProfilLogo">S</div>
              <div className="PromisesDivCustomerProfil">
                <div className="customerProfilName">Sahil Roy</div>
                <div className="customerWhire">ACKO customer</div>
              </div>
            </div>

            <div className="viewMoreDiv">
              <div className="viewMoreDivTital">View more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
