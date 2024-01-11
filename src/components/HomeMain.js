import React from "react";
import "./HomeMain.css";
import icon1 from "../Assets/adv-aseets/icons/1.svg";
import icon2 from "../Assets/adv-aseets/icons/2.svg";
import icon3 from "../Assets/adv-aseets/icons/3.svg";
import icon4 from "../Assets/adv-aseets/icons/4.svg";
import icon5 from "../Assets/adv-aseets/icons/5.svg";
import icon6 from "../Assets/adv-aseets/icons/6.svg";

export default function HomeMain() {
  return (
    <>
      <section>
        <div className="mainDiv">
          <div className="div1">
            <div id="div1-1">
              <img src={icon1} />
              <p>YENİ! Kore</p>
            </div>
            <div id="div1-2">
              <img src={icon2} />
              <p>Pizza</p>
            </div>
            <div id="div1-3">
              <img src={icon3} />
              <p>Burger</p>
            </div>
            <div id="div1-4">
              <img src={icon4} />
              <p>Kızartmalar</p>
            </div>
            <div id="div1-5">
              <img src={icon5} />
              <p>Fast Food</p>
            </div>
            <div id="div1-6">
              <img src={icon6} />
              <p>Gazlı İçecek</p>
            </div>
          </div>
          <div className="div2">
            <div className="div2-1"></div>
            <div className="div2-2">
            <div className="div2-2-1"></div>
            <div className="div2-2-2"></div>
            </div>
          </div>
          <div className="div3">
          </div>
          <div className="div1">
            <div className="div1-1"></div>
            <div className="div1-2"></div>
            <div className="div1-3"></div>
            <div className="div1-4"></div>
            <div className="div1-5"></div>
            <div className="div1-6"></div>
          </div>
          <div className="div4">
            <div className="div4-1"></div>
            <div className="div4-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}
