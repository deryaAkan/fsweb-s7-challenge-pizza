import React from "react";
import "./HomeMain.css";
import icon1 from "../Assets/adv-aseets/icons/1.svg";
import icon2 from "../Assets/adv-aseets/icons/2.svg";
import icon3 from "../Assets/adv-aseets/icons/3.svg";
import icon4 from "../Assets/adv-aseets/icons/4.svg";
import icon5 from "../Assets/adv-aseets/icons/5.svg";
import icon6 from "../Assets/adv-aseets/icons/6.svg";
import food1 from "../Assets/adv-aseets/food-1.png";
import food2 from "../Assets/adv-aseets/food-2.png";
import food3 from "../Assets/adv-aseets/food-3.png";
import ButtonHome from './ButtonHome';


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
              <div id="card1-info">
                <h3>ÖZEL</h3>
                <h3>LEZZETUS</h3>
                <h6>Position:Absolute Burger</h6>
                <ButtonHome/>
              </div>
               
            </div>
            <div className="div2-2">
            <div className="div2-2-1">
            <div id="card1-info">
                <h2>Hackathlon</h2>
                <h2>Burger Menü</h2>
                <ButtonHome/>
              </div>
            </div>
            <div className="div2-2-2">
            <div id="card1-info">
            <h3 id="red-coook">Çoooook hızlı</h3>
                <h3 id="black-npm">npm gibi kurye</h3>
                <ButtonHome/>
                </div>
            </div>
            </div>
          </div>
          <div className="div3">
            <h5 id="main-cursive">en çok paketlenen menüler</h5>
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
            <div className="div5-1">
              <img id="div5-img" src={food1} />
              <div className="div5-pizza-names">
              <h6>Terminal Pizza</h6>
              <div className="pizza-price">
                <p id="mini-rating">4.9</p>
                <p id="mini-rating">(200)</p>
                <p >60₺</p>
              </div>
              </div>
            </div>
            <div className="div5-2">
            <img id="div5-img" src={food2} />
            <div className="div5-pizza-names">
              <h6>Position Absolute Pizza</h6>
              <div className="pizza-price">
              <p id="mini-rating">4.9</p>
                <p id="mini-rating">(928)</p>
                <p >85₺</p>
              </div>
            </div>
            </div>
            <div className="div5-2">
            <img id="div5-img" src={food3} />
            <div className="div5-pizza-names">
            <h6>useEffect Tavuklu Burger</h6>
            <div className="pizza-price">
            <p id="mini-rating">4.9</p>
                <p id="mini-rating">(462)</p>
                <p>75₺</p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
