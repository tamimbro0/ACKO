import React from "react";
import "./Home.css";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import lifeInsurance from "../../assets/lifeInsurance.png";

import carinsurance from "../../assets/carinsurance.png";

import healthInsurance from "../../assets/healthInsurance.png";

import bikeinsurance from "../../assets/bikeinsurance.png";

import Travelingsoon from "../../assets/Travelingsoon.png";

import DomesticAirPass from "../../assets/DomesticAirPass.png"

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const LuxuryLaurel = ({ flip }) => (
  <svg
    width="45"
    height="65"
    viewBox="0 0 100 120"
    style={{
      transform: flip ? "scaleX(-1)" : "none",
      fill: "#3a3a3a",
    }}
  >
    <path d="M45.1,105.7c-5.8-3.4-11.2-7.5-15.8-12.4c-4.7-4.9-8.4-10.6-10.9-16.9c-2.4-6.3-3.6-13-3.4-19.8 c0.1-3.4,0.5-6.8,1.2-10.1c-1.3,3.1-2.1,6.4-2.5,9.8c-0.4,3.4-0.4,6.8-0.1,10.2c0.4,3.4,1.2,6.7,2.5,9.8 c1.2,3.1,2.9,6,4.9,8.6c-2.5-2.2-4.6-4.9-6.3-7.8c-1.7-2.9-2.9-6-3.7-9.3c-0.7-3.3-1-6.6-0.9-10c0.2-3.4,0.7-6.7,1.7-9.9 c-1.2,2.8-2.1,5.7-2.7,8.7c-0.6,3-0.8,6.1-0.7,9.1c0.1,3.1,0.5,6.1,1.3,9c0.8,2.9,2,5.7,3.6,8.2c1.5,2.6,3.4,4.9,5.5,6.9 c2.2,2,4.6,3.7,7.2,4.9L45.1,105.7z M50,115.5c0-2-0.8-3.9-2.2-5.3c-1.4-1.4-3.3-2.2-5.3-2.2h-1.5 c2,0,3.9,0.8,5.3,2.2c1.4,1.4,2.2,3.3,2.2,5.3V115.5z M38.6,73.5c-1.2-3.5-1.9-7.2-1.9-10.9c0-3.7,0.5-7.4,1.6-10.9 c-1.3,3.3-2.2,6.7-2.6,10.2c-0.4,3.5-0.4,7,0.1,10.5c0.5,3.4,1.4,6.8,2.8,10c1.4,3.2,3.3,6.2,5.6,8.8 c-2.5-2.2-4.6-4.9-6-7.9C36.9,80.4,36.1,77,38.6,73.5z" />
    <path d="M30.5,45.5c-0.8-2.5-1.3-5.1-1.4-7.8c-0.1-2.7,0.3-5.4,1.1-8c-1,2.3-1.7,4.7-2,7.2c-0.4,2.5-0.4,5.1-0.1,7.6 c0.3,2.5,0.9,5,1.9,7.3c1,2.3,2.4,4.4,4,6.3c-1.8-1.6-3.3-3.6-4.3-5.8C28.7,50.1,29.4,47.8,30.5,45.5z" />
  </svg>
);

const Home = () => {
  return (
    <div className="home">
      <div className="homeTopDiv">
        <div className="leftHomeTopDiv">
          <h2>
            Have an award-winning <br /> insurer by your side
          </h2>
        </div>

        <div className="rightHomeTopDiv">
          {/* Award Badge 1 */}
          <div className="premium-badge">
            <LuxuryLaurel />
            <div className="badge-info">
              <span className="main-title">India's #1*</span>
              <span className="sub-title">insurance app</span>
            </div>
            <LuxuryLaurel flip />
          </div>

          {/* Award Badge 2 */}
          <div className="premium-badge">
            <LuxuryLaurel />
            <div className="badge-info">
              <span className="main-title">Best direct</span>
              <span className="sub-title">insurer 2025</span>
            </div>
            <LuxuryLaurel flip />
          </div>
        </div>
      </div>

      <div className="allInsuranceCard">
        {/* Left */}
        <div className="leftInsuranceCard">
          <div className="leftInsuranceCardMainTitle">
            Protect your family with our <br /> 100% pure life insurance
          </div>
          <div className="leftInsuranceCardPragrap">
            Not Mixed with ony returns or jargons
          </div>

          <div className="leftInsuranceCardConverage">
            <div className="ConverageTital">
              <CheckCircleIcon /> Coverage from ₹25 L to ₹100 Cr
            </div>
          </div>

          <div className="leftInsuranceCardImg">
            <img src={lifeInsurance} alt="" className="leftLifeInsureImg" />
          </div>

          <ArrowRightAltIcon className="arrowRightIcon" />
        </div>

        {/* Right Section Wrapper */}
        <div className="rightSectionWrapper">
          <div className="rightAllDivCard">
          <div className="rightFastTopDiv">
            <div className="carInsurerCard">
              <div className="carInsurerCardTitle">Car insurance</div>
              <div className="carInsurerCardSimplePrice">
                Simple prices. Super fast claims.
              </div>
              <div className="carInsurerCardPragrap">That's our promise.</div>

              <div className="leftInsuranceCardConverage">
                <div className="ConverageTital">
                  <CheckCircleIcon /> Starting at just ₹2094*
                </div>
              </div>

              <div className="carInsuranceImgDiv">
                <img
                  src={carinsurance}
                  alt=""
                  className="carInsuranceImgDivImg"
                />
              </div>
              <ArrowRightAltIcon className="arrowRightSectinIcon" />
            </div>
          </div>

          <div className="rightSecondTopDiv">
            <div className="healthInsuranceCard">
              <div className="healthInsuranceCardTitle">Health insurance</div>

              <div className="hospitalBillTitle">
                100% hospital bill payments.
              </div>

              <div className="healthInsuranceCardParagrap">No surprises.</div>

              <div className="leftInsuranceCardConverage">
                <div className="ConverageTital">
                  <CheckCircleIcon /> From ₹600/month
                </div>
              </div>

              <div className="healthInsuranceCardImg">
                <img
                  src={healthInsurance}
                  alt=""
                  className="ImgHealthInsuranceCardImg"
                />
              </div>

              <ArrowRightAltIcon className="arrowRightHealthCardIcon" />
            </div>
          </div>
        </div>

        {/* Right Div Down Row */}
        <div className="rightBottomRow">

        <div className="rightDownAllDiv">
          <div className="rightDownDiv">
            <div className="bikeInsuranceDiv">
              <div className="bikeinsuranceDivTitle">Bike insurance</div>
              <div className="bikeInsuranceDivParagrap">
                Insure your bike or scooter in just 1 minute
              </div>

              <div className="bikeinsuranceDivImg">
                <img
                  src={bikeinsurance}
                  alt=""
                  className="ImgBikeInsuranceDivImg"
                />
              </div>

              <ArrowRightAltIcon className="arrowRightBikeCardIcon" />
            </div>
          </div>
        </div>



           <div className="rightDownAllDiv">
          <div className="rightDownDiv">
            <div className="bikeInsuranceDiv">
              <div className="bikeinsuranceDivTitle">Traveling soon?</div>
              <div className="bikeInsuranceDivParagrap">
              <span className="bikeInsuranceDivParagrapColor" >Travel insurance</span> with emergency 
              medical coverage in 150+ countries
              </div>

              <div className="bikeinsuranceDivImg">
                <img
                  src={Travelingsoon}
                  alt=""
                  className="ImgBikeInsuranceDivImg"
                />
              </div>

              <ArrowRightAltIcon className="arrowRightBikeCardIcon" />
            </div>
          </div>
        </div>

           <div className="rightDownAllDiv">
          <div className="rightDownDiv">
            <div className="bikeInsuranceDiv">
              <div className="bikeinsuranceDivTitle">Domestic AirPass</div>
              <div className="bikeInsuranceDivParagrap">
             <span className="bikeInsuranceDivParagrapColor">The only pass that pays you back </span><br /> for domestic flight disruptions
              </div>

              <div className="bikeinsuranceDivImg">
                <img
                  src={DomesticAirPass}
                  alt=""
                  className="ImgBikeInsuranceDivImg"
                />
              </div>

              <ArrowRightAltIcon className="arrowRightBikeCardIcon" />
            </div>
          </div>
        </div>

        </div>

        </div>

      </div>

      <div className="uidNumber">
      UID: 6484 | ARN: L0110 | T&C apply
      </div>

      
    </div>
  );
};

export default Home;
