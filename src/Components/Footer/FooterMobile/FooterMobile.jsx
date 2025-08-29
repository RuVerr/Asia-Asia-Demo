import React from "react";

import binanceIcon from "../../../images/MobileIcon/FooterMobile/binance-icon.svg";
import telegramIcon from "../../../images/MobileIcon/FooterMobile/telegram-icon.svg";
import instagramIcon from "../../../images/MobileIcon/FooterMobile/instagram-icon.svg";
import facebookIcon from "../../../images/MobileIcon/FooterMobile/facebook-icon.svg";
import youtubeIcon from "../../../images/MobileIcon/FooterMobile/youTube-icon.svg";

import "./footerMobile.scss";
import { Link } from "react-router-dom";
export default function footerMobile() {
  return (
    <footer className="mobileFooter">
      <div className="container">
        <div className="mobileFooterContent">
          <div className="payment">
            <h3 className="boxTitle paymentBoxTitle">Payment</h3>
            <div className="paymentBox">
              <Link>
                <img src={binanceIcon} alt="Binance icon" />
                <h3 className="paymentTitle">Binance</h3>
              </Link>
            </div>
          </div>
          <div className="helpCenter">
            <h3 className="boxTitle helpCenterBoxTitle">Help center</h3>
            <div className="helpCenterBox">
              <Link>
                <img src={telegramIcon} alt="Telegram icon" />
                <h3 className="helpCenterTitle">asia-asia-invest</h3>
              </Link>
            </div>
          </div>
          <div className="socialNetwork">
            <h3 className="boxTitle socialNetworkTitle">Social Network</h3>
            <div className="socialNetworkBox">
              <Link>
                <img src={instagramIcon} alt="instagram icon" />
              </Link>
              <Link>
                <img src={facebookIcon} alt="Facebook icon" />
              </Link>
              <Link>
                <img src={youtubeIcon} alt="YouTube icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
