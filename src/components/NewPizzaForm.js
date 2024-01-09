import React, { useState } from "react";
import styled from "styled-components";
import { Input, Label, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const FormPage = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

//BOY SEÇ VE HAMUR SEÇ KISMI
const DoughSizeAndThickness = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
`;

const DoughSize = styled.div`
  flex-grow: 1;
  background-color: royalblue;
`;
const DoughThickness = styled.div`
  flex-grow: 1;
  background-color: crimson;
`;

//CHECKBOX KISMI
const checkboxLabels = [
  "Pepperoni",
  "Sarımsak",
  "Jambon",
  "Sucuk",
  "Ananas",
  "Salam",
  "Biber",
  "Kapya",
  "Mantar",
  "Sosis",
  "Kabak",
  "Jalepeno",
  "Domates",
  "Soğan",
  "Mısır",
  "Tavuk",
];

const ExtraToppings = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  background-color: green;
  gap: 10px;
  alignitems: flex-end;
  margintop: 20px;
`;

const Extras = {
  display: "flex",
  flexWrap: "wrap",
  width: "600px",
  backgroundColor: " green",
  gap: "10px",
  alignItems: "flex-end",
  marginTop: "20px",
};

const TheExtraTopping = styled.div`
  flex-basis: 100px;
`;

//İSİM İNPUT ALANI

const NameInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  background-color: purple;
`;
//SİPARİŞ NOTU İNPUT ALANI

const OrderInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  background-color: pink;
`;

//COUNTER VE SUBMİT ALANI

const CounterAndSubmit = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  background-color: green;
  gap: 30px;
`;

//COUNTER KISMI
const Counter = styled.div`
  background-color: lightblue;
  display: flex;
  flex-grow: 1;
`;

const IncrementButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  height: 5vh;
`;

const DecrementButton = styled.button`
  background-color: gray;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  height: 5vh;
`;

//SUBMİT KISMI
const SubmitPart = styled.div`
  border: 1px solid black;
  padding: 10px;
  flex-grow: 4;
  height: 10vh;
`;

const requiredIndicator = {
  color: "red",
  marginLeft: "5px",
};

export default function NewPizzaForm() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    name: "",
    toppings: [],
    size: "",
    extras: [],
    fullName: "",
    orderNote: "",
  });

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };

  const handleExtrasChange = (e) => {
    const extra = e.target.value;

    if (formData.extras.includes(extra)) {
      setFormData({
        ...formData,
        extras: formData.extras.filter((item) => item !== extra),
      });
    } else if (4 < formData.extras.length < 10) {
      setFormData({
        ...formData,
        extras: [...formData.extras, extra],
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios ile API isteği yapılıyor
      const response = await axios.post(
        "https://reqres.in/api/pizzas",
        formData
      );

      // API'den başarılı bir şekilde veri alındığında, success sayfasına yönlendiriliyor
      history.push("/success");
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <>
      <FormPage>
        <form onSubmit={handleSubmit} id="pizza-form">
          <DoughSizeAndThickness>
            <DoughSize>
              <div id="size-radio">
                Boyut Seç:<span style={requiredIndicator}>*</span>:
                <div>
                  <input
                    type="radio"
                    name="size"
                    value="small"
                    onChange={handleSizeChange}
                    checked={formData.size === "small"}
                    required
                  />{" "}
                  <label>Küçük</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="size"
                    value="medium"
                    onChange={handleSizeChange}
                    checked={formData.size === "medium"}
                    required
                  />{" "}
                  <label>Orta</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="size"
                    value="large"
                    onChange={handleSizeChange}
                    checked={formData.size === "large"}
                    required
                  />{" "}
                  <label>Büyük</label>
                </div>
              </div>
            </DoughSize>
            <DoughThickness>
              <div id="hamur-sec">
                <label>
                  Hamur Seç:<span style={requiredIndicator}>*</span>:
                  <div>
                    <select
                      name="dough"
                      id="dough"
                      form="dough"
                      value={formData.size}
                    >
                      <option value="default">Hamur Kalınlığı</option>
                      <option value="thin">İnce</option>
                      <option value="half-thick">Orta</option>
                      <option value="thick">Kalın</option>
                    </select>
                  </div>
                </label>
              </div>
            </DoughThickness>
          </DoughSizeAndThickness>
          <ExtraToppings>
            <label>
              Ek Malzemeler:
              <p style={{ width: "100%" }}>
                En fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div style={Extras}>
                {checkboxLabels.map((label, index) => (
                  <TheExtraTopping key={index}>
                    <input
                      type="checkbox"
                      name={`extra-${index}`}
                      value={`option-${index}`}
                      onChange={handleExtrasChange}
                      checked={formData.extras.includes(`option-${index}`)}
                    />
                    <label>{label}</label>
                  </TheExtraTopping>
                ))}
              </div>
            </label>
          </ExtraToppings>
          <NameInput>
            <Label for="customerName">
              İsminizi Giriniz<span style={requiredIndicator}>*</span>:
            </Label>
            <div>
              <Input
                id="name-input"
                name="fullName"
                placeholder="İsim Soyisim"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                style={{ width: "575px", marginTop: "10px", padding: "10px" }}
              />
            </div>
          </NameInput>
          <OrderInput>
            <Label for="order-note">Sipariş Notu:</Label>
            <div>
              <Input
                type="text"
                name="orderNote"
                value={formData.orderNote}
                onChange={handleInputChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={{ width: "575px", marginTop: "10px", padding: "10px" }}
              />
            </div>
          </OrderInput>
          <hr style={{ width: "600px" }}></hr>
          <CounterAndSubmit>
            <Counter>
              <DecrementButton></DecrementButton>
              <p>1</p>
              <IncrementButton></IncrementButton>
            </Counter>
            <SubmitPart>
              <Button
                color="primary"
                tag="input"
                type="submit"
                value="Sipariş ver"
              />
            </SubmitPart>
          </CounterAndSubmit>
        </form>
      </FormPage>
    </>
  );
}
