import React from "react";
import "./Footer.css";
import FooterLogoSvg from "../Assets/logo-footer.svg";
import InstaImage1 from "../Assets/adv-aseets/insta/li-0.png";
import InstaImage2 from "../Assets/adv-aseets/insta/li-1.png";
import InstaImage3 from "../Assets/adv-aseets/insta/li-2.png";
import InstaImage4 from "../Assets/adv-aseets/insta/li-3.png";
import InstaImage5 from "../Assets/adv-aseets/insta/li-4.png";
import InstaImage6 from "../Assets/adv-aseets/insta/li-5.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerBackground">
          <div className="footer-info">
            <div className="footer-info-logo">
              <img src={FooterLogoSvg} />
              <div className="contact-footer">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FDC913" }}
                  size="1x"
                />
                <p>341 Londonderry Road, Istanbul Turkiye</p>
              </div>
              <div className="contact-footer">
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  style={{ color: "#FDC913" }}
                  size="1x"
                />
                <p>aciktim@teknolojikyemekler.com</p>
              </div>
              <div className="contact-footer">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  style={{ color: "#FDC913"}}
                  size="1x"
                /><p id="phone-footer">+90 216 123 4567</p>
              </div>
            </div>
            <div className="menu-footer">
              <h4>Sıccacık Yemekler</h4>
              <p>Terminal Pizza</p>
              <p>5 kişilik Hacklathon Pizza</p>
              <p>useEffect Tavuklu Pizza</p>
              <p>Beyaz Console Frosty</p>
              <p>Testler Geçti Mutlu Burger</p>
              <p>Position Absolute Acı Burger</p>
            </div>
          </div>
          <div className="footer-insta">
            <p>Instagram</p>
            <div className="footer-insta-img">
              <img id="footer-insta-img " src={InstaImage1} />
              <img id="footer-insta-img " src={InstaImage2} />
              <img id="footer-insta-img " src={InstaImage3} />
              <img id="footer-insta-img " src={InstaImage4} />
              <img id="footer-insta-img " src={InstaImage5} />
              <img id="footer-insta-img " src={InstaImage6} />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
            <p>@ 2023 Teknolojik Yemekler</p>
            <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "white" }}
                  size="1x"
                />
        </div>
      </footer>
    </>
  );
}
