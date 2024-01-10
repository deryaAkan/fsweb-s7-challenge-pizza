import React from "react";
import halfPizza from "../Assets/adv-aseets/adv-form-banner.png";
import { NavLink } from "reactstrap";
import './PizzaDescription.css';


export default function PizzaDescription() {
  console.log("PizzaDescription component rendered");

  return (
    <main>
      <img src={halfPizza} alt="Half Pizza" />
      <div className="links-container">
        <NavLink style={{color: "black",textDecoration: "none"}} href="/">Anasayfa</NavLink>
        <span>-</span>
        <NavLink style={{color: "black", textDecoration: "none"}} href="/menu">Seçenekler</NavLink>
        <span>-</span>
        <NavLink style={{color: "#CE2829", textDecoration: "none"}} href="/pizza">Sipariş Oluştur</NavLink>
      </div>
      <h4>Position Absolute Acı Pizza</h4>
      <h2>85,50₺</h2>
      <p id="pizzaDesc">
        Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli ve lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </main>
  );
}
