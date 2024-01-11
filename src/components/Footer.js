import React from "react";
import "./Footer.css";
import FooterLogoSvg from "../Assets/logo-footer.svg";
import InstaImage1 from "../Assets/adv-aseets/insta/li-0.png";
import InstaImage2 from "../Assets/adv-aseets/insta/li-1.png";
import InstaImage3 from "../Assets/adv-aseets/insta/li-2.png";
import InstaImage4 from "../Assets/adv-aseets/insta/li-3.png";
import InstaImage5 from "../Assets/adv-aseets/insta/li-4.png";
import InstaImage6 from "../Assets/adv-aseets/insta/li-5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
  return (
    <>
      <footer>
        <div className="footerBackground">
          <div className="footer-info">
            <div className="footer-info-logo">
              <img src={FooterLogoSvg} />
              <div className="contact-footer">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#FFD43B",}} />
              </div>
              <div className="contact-footer">B</div>
              <div className="contact-footer">C</div>
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
              <img src={InstaImage1} />
              <img src={InstaImage2} />
              <img src={InstaImage3} />
              <img src={InstaImage4} />
              <img src={InstaImage5} />
              <img src={InstaImage6} />
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">blah blah</div>
      </footer>
    </>
  );
}
