import React from "react";

import ackologo from "../../assets/ackologo.png";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarDeatils">
        <div className="leftSection">
        <div className="imgNavbarLogo">
          <img src={ackologo} alt="" className="imgNavbarLogoImg" />
        </div>

        <div className="pageList">
          <div className="productsPageLIst">Products <KeyboardArrowDownIcon />  </div>
          <div className="enterprisePagelist">Products</div>
          <div className="whyACKOpageList">Why ACKO?</div>

          <div className="supportPageList">Support</div>
        </div>
        </div>
     
      <div className="ImformentPageList">
        <div className="RenewalsImformentPageList">Renewals</div>
        <div className="claimsImformentPageList">Claims</div>

        <div className="LoginImformentPageList">Login</div>
      </div>

      </div>
    </div>
  );
};

export default Navbar;
