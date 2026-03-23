import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerDiv">
      <div className="footerDivContent">



        <div className="products">
          <div className="productsTital">Products</div>

          <div className="insurancePage   carInsurancePage">Car insurance</div>
          <div className=" insurancePage  bikeInsurancePage">
            Bike insurance
          </div>
          <div className=" insurancePage  healthInsurancePage">
            Health insurance
          </div>
          <div className=" insurancePage  lifeInsurancePage">
            Life insurance
          </div>
          <div className=" insurancePage  travelInsurancePage">
            Travel insurance
          </div>
          <div className=" insurancePage  enterpriseInsurancePage">
            Enterprise solutions
          </div>
        </div>


          
        <div className="products">
          <div className="productsTital">Company</div>

          <div className="insurancePage   carInsurancePage">About Us</div>
          <div className=" insurancePage  bikeInsurancePage">
            Careers
          </div>
          <div className=" insurancePage  healthInsurancePage">
            Contact Us 
          </div>
          <div className=" insurancePage  lifeInsurancePage">
            Board of directors
          </div>
        </div>


          
        <div className="products">
          <div className="productsTital">Brand Hub
          </div>

          <div className="insurancePage   carInsurancePage">All resources</div>
          <div className=" insurancePage  bikeInsurancePage">
            Customer stories
          </div>
          <div className=" insurancePage  healthInsurancePage">
            Media Kit
          </div>
          <div className=" insurancePage  lifeInsurancePage">
            Articles
          </div>
          <div className=" insurancePage  travelInsurancePage">
            E-books
          </div>
          <div className=" insurancePage  enterpriseInsurancePage">
            Guides
          </div>
        </div>


          
        <div className="products">
          <div className="productsTital">Legal</div>

          <div className="insurancePage   carInsurancePage">Finacials & disclosures</div>
          <div className=" insurancePage  bikeInsurancePage">
            Privacy policy
          </div>
          <div className=" insurancePage  healthInsurancePage">
            Terms & conditions
          </div>
          
        </div>






      </div>
      <div className="footerBottom">
        © {new Date().getFullYear()} Acko General Insurance Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
