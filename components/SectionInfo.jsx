import React from "react";
import logo from "../public/atriumLogo.png";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa";

const SectionInfo = () => {
  return (
    //Add logo img inside the following div
    <div id="inicio" className="sectioninfo">
      <div className="logo-container">
        <Image href="/" src={logo} className="logo" />
      </div>
      <div className="contact-info-container">
        <div className="contact-info-buttons">
          <div>
          <div className="info-btn">
            <FaEnvelope className="icon" />
          </div>
            <p className="info-btn-data">admin@atriumphysiotherapy.com</p>
          </div>
          <div>
          <div className="info-btn">
            <FaMapMarkerAlt className="icon" />
          </div>
            <p>
              340 Midpark Way SE - Suite 140
              <br />
              Calgary, AB, T2X 1P1
            </p>
          </div>
          <div>
          <div className="info-btn">
            <FaPhoneAlt className="icon" />
          </div>
            <p>+1(403)-255 4461</p>
          </div>
          <div>
          <div className="info-btn">
            <FaFax className="icon" />
          </div>
            <p>+1(403)-259 8776</p>
          </div> 
        </div>
      </div>
      <div className="appointment-btn-section">
        <Link href="/Appointment">
          <a className="appointment-btn cta-btn">Book Your Appointment</a>
        </Link>
      </div>
    </div>
  );
};

export default SectionInfo;
