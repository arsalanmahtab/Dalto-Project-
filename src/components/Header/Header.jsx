import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {

  const [activeLink, setActiveLink] = useState('');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <div>
        <h4 style={{ fontSize: "24px", fontWeight: "500" }}>New Tenany</h4>
      </div>

      <div className="container" style={{ marginTop: "20px" }}>
        <div className="row">
         <div className="col-md-3">
        <Link
          className={`nav-link ${activeLink === 'tenancyInfo' ? 'active' : ''}`}
          to="/TenancyInfo"
          onClick={() => handleLinkClick('tenancyInfo')}
          style={{ color: activeLink === 'tenancyInfo' ? '#2E3192' : '#8F8F8F' }}
        >
          Tenancy Info
        </Link>
      </div>
      <div className="col-md-3">
        <Link
          className={`nav-link ${activeLink === 'propertyDetails' ? 'active' : ''}`}
          to="/PropertyDetails"
          onClick={() => handleLinkClick('propertyDetails')}
          style={{ color: activeLink === 'propertyDetails' ? '#2E3192' : '#8F8F8F' }}
        >
          Property Details
        </Link>
      </div>
          <div
            className="col-md-3"
            style={{ color: "#8F8F8F", fontWeight: "500" }}
          >
            Payment{" "}
          </div>
          <div
            className="col-md-3"
            style={{ color: "#8F8F8F", fontWeight: "500" }}
          >
            Additional Details{" "}
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;