import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="content">
        <div className="content-left">
          <img src={assets.logo} alt="" />
          <p>
            Satisfy your cravings, no lines required & Order in, dine like a
            king
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="content-center">
          <h2>Tomatofood.limited</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="content-right">
          <h2>Get In Touch ✉️</h2>
          <ul>
            <li>+91-81409-23198</li>
            <li>tomato@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="copyright">
        Copyright 2024 ©™ Tomato.com - All rights reserved.
        <span> 🧑🏽‍💻Created By: Jay Chavada</span>
      </div>
    </div>
  );
};
export default Footer;
