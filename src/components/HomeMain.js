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
      <div className="div1">
            <div className="div1-1">
              <img id="div1-img" src={icon1} />
              <p>YENİ! Kore</p>
            </div>
            <div className="div1-1">
              <img src={icon2} id="div1-img" />
              <p>Pizza</p>
            </div>
            <div className="div1-1" >
              <img src={icon3} id="div1-img"/>
              <p>Burger</p>
            </div>
            <div className="div1-1">
              <img src={icon4} id="div1-img"/>
              <p>Kızartmalar</p>
            </div>
            <div className="div1-1" >
              <img src={icon5} id="div1-img" />
              <p>Fast Food</p>
            </div>
            <div className="div1-1">
              <img src={icon6} id="div1-img" />
              <p>Gazlı İçecek</p>
            </div>
          </div>
        <div className="mainDiv">
         
          <div className="div2">
            <div className="div2-1">
                ÖZEL LEZZETUS
            </div>
            <div className="div2-2">
            <div className="div2-2-1">HACKATHLON</div>
            <div className="div2-2-2">NPM KURYE</div>
            </div>
          </div>
          <div className="div3">
            <p>en çok paketlenen menüler</p>
            <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
          </div>
          <div className="div4">
            <div className="rounded-icons" >
              <img id="div1-img" src={icon1} />
              <p>YENİ! Kore</p>
            </div>
            <div id="rounded-icon-pizza" className="rounded-icons" >
              <img src={icon2} id="div1-img" />
              <p>Pizza</p>
            </div>
            <div className="rounded-icons" >
              <img src={icon3} id="div1-img"/>
              <p>Burger</p>
            </div>
            <div className="rounded-icons" >
              <img src={icon4} id="div1-img"/>
              <p>Kızartmalar</p>
            </div>
            <div className="rounded-icons" >
              <img src={icon5} id="div1-img" />
              <p>Fast Food</p>
            </div>
            <div className="rounded-icons" >
              <img src={icon6} id="div1-img" />
              <p>Gazlı İçecek</p>
            </div>
          </div>
          <div className="div5">
            <div className="div5-1"></div>
            <div className="div5-2"></div>
          </div>
        </div>
      </section>
    </>
  );
}
