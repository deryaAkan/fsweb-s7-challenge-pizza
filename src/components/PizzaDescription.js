import React from "react";
import styled from "styled-components";
import halfPizza from "../Assets/adv-aseets/adv-form-banner.png";

const Main = styled.div`
  background-color: #faf7f2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  
`;

const Image = styled.img`
  width: 600px;
  max-height: 80vh;
  object-fit: contain;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 20px;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 15px;
`;


export default function PizzaDescription() {
  return (
    <Main>
      <Image src={halfPizza} alt="Half Pizza" />
      <LinksContainer>
        <NavLink href="/">Anasayfa</NavLink>
        <span>-</span>
        <NavLink href="/menu">Seçenekler</NavLink>
        <span>-</span>
        <NavLink style={{color: "#CE2829"}} href="/pizza">Sipariş Oluştur</NavLink>
        <span>-</span>
        <NavLink href="/success">Success</NavLink>
      </LinksContainer>
      <h4>Position Absolute Acı Pizza</h4>
      <h2>85,50₺</h2>
      <p style={{maxWidth: "600px"}}>
        Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli ve lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </Main>
  );
}
