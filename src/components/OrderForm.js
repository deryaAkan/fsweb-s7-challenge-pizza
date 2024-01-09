import React, { useState } from "react";
import styled from "styled-components";
import { Input, Label, Button} from "reactstrap";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const FormPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormItself = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  gap: "30px",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "30%",
};

const FormElements = {
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  gap: "100px",
};

const PizzaName = {
  display: "flex",
  justifyContent: "flex-start",
  width: "30%",
  gap: "50%",
};

const requiredIndicator = {
  color: "red",
  marginLeft: "5px",
};

const radioLabelStyle = {
  margin: "10px 0 8px 0",
};

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

const checkBoxContainer = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "10px",
  alignItems: "flex-end",
  marginTop: "20px",
};

const checkboxDiv = {
  flexBasis: "100px",
};

const OrderForm = () => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Axios ile API isteği yapılıyor
      const response = await axios.post("https://reqres.in/api/pizzas", formData);
      
      // API'den başarılı bir şekilde veri alındığında, success sayfasına yönlendiriliyor
      history.push("/success");
    } catch (error) {
      console.error("API request error:", error);
    }};

  return (
    <FormPageContainer>
      <form onSubmit={handleSubmit} id="pizza-form" style={FormItself}>
        <div style={FormElements}>
          <div id="size-radio">
            Boyut Seç:<span style={requiredIndicator}>*</span>:
            <div style={radioLabelStyle}>
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
            <div style={radioLabelStyle}>
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
            <div style={radioLabelStyle}>
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
          <div id="hamur-sec">
            <label>
              Hamur Seç:<span style={requiredIndicator}>*</span>:
              <div style={radioLabelStyle}>
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
        </div>

        <div style={checkBoxContainer}>
          <label>
            Ek Malzemeler:
            <p style={{width: "100%"}}>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div style={checkBoxContainer}>
              {checkboxLabels.map((label, index) => (
                <div key={index} style={checkboxDiv}>
                  <input
                    type="checkbox"
                    name={`extra-${index}`}
                    value={`option-${index}`}
                    onChange={handleExtrasChange}
                    checked={formData.extras.includes(`option-${index}`)}
                  />
                  <label>{label}</label>
                </div>
              ))}
            </div>
          </label>
        </div>

        <div>
          <Label for="customerName">İsminizi Giriniz</Label>
          <span style={requiredIndicator}>*</span>:
          <div>
            <Input
              id="name-input"
              name="fullName"
              placeholder="İsim Soyisim"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              style={{ width: "250%", marginTop: "10px", padding: "10px" }}
            />
          </div>
        </div>
        <div>
          <Label for="order-note">Sipariş Notu:</Label>
          <div>
            <Input
              type="text"
              name="orderNote"
              value={formData.orderNote}
              onChange={handleInputChange}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
              style={{ width: "250%", marginTop: "10px", padding: "10px" }}
            />
          </div>
        </div>
        <Button color="primary" tag="input" type="submit" value="Submit" />
      </form>
    </FormPageContainer>
  );
};

export default OrderForm;
