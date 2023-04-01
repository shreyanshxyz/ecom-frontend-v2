import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  LocationMarkerIcon,
  PhoneIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>BuyBuy</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 North Avenue, Orlando FL, 32001</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <a href="tel:352-306-4415">352-306-4415</a>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:support@buybuy.com">support@buybuy.com</a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <a href="/about">
                <p>Safety & Privacy</p>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>Copyright ©2022 by BuyBuy, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
