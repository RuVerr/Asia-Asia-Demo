import React from "react";

import Button from "../../Buttons/Button";
import SocialLogo from "../../../images/footerLogo.png";
import twiter from "../../../images/icons/twiterIco.png";
import insta from "../../../images/icons/instaIco.png";
import fb from "../../../images/icons/fbIco.png";
import sms from "../../../images/icons/sms.png";

import { Link, NavLink } from "react-router-dom";

import "./footer.scss";
import "./mediaFooter.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footerHandle">
        <div className="footerHandleBox1">
          <div className="socialNetwork">
            <img src={SocialLogo} alt="Footer Logo" />
            <p className="pSocialNetwork">Our social networks</p>
            <div className="socialLogos">
              <Link to={"/"}>
                <img src={twiter} alt="SocialLogos" />
              </Link>
              <Link to={"/"}>
                <img src={fb} alt="SocialLogos" />
              </Link>
              <Link to={"/"}>
                <img src={insta} alt="SocialLogos" />
              </Link>
            </div>
          </div>
          <div className="helpService">
            <ul className="helpServiceList">
              <h3 className="helpServiceListTitle">HElP and services</h3>
              <li className="helpServiceItem">
                <Link>How does it work</Link>
              </li>
              <li className="helpServiceItem">
                <Link>FAQ</Link>
              </li>
              <li className="helpServiceItem">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navigationFoot">
            <ul className="navigationFootList">
              <h3 className="helpFootListTitle">Navigation</h3>
              <li className="navigationFootItem">
                <NavLink to={"/invest"}>Invest</NavLink>
              </li>
              <li className="navigationFootItem">
                <NavLink to={"/about"}>About us</NavLink>
              </li>
              <li className="navigationFootItem">
                <NavLink to={"/team"}>Our Team</NavLink>
              </li>
              <li className="navigationFootItem">
                <NavLink to={"/journey"}>Our journey</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="newsLetter">
          <h3>NEWSLETTER</h3>
          <form className="newsLetter_form">
            <label>
              <img src={sms} alt="sms" />
              <input className="newsLetterInput" type="text" placeholder="Enter your email address" />
            </label>
            <Button text={"Subscribe Now"} name={"footerSubscribe"} />
          </form>
        </div>
      </div>
      <div className="privatePolicy">
        <NavLink to={"/"}>Privacy policy</NavLink>
        <NavLink to={"/"}>Terms of Use</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
