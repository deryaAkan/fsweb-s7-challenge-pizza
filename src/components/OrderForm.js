import React, { useState } from "react";
import styled from "styled-components";

const FormPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormItself = {
  width: "30%",
  display: "flex",
  flexDirection: "column",
}

const FormElements = {
  display: "flex",
  justifyContent: "flex-start",
  width: "30%",
  gap: "150%",
};


const PizzaName = {
display: "flex",
  justifyContent: "flex-start",
  width: "30%",
  gap: "50%"
}

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
  "Kapya Biber",
  "Mantar",
  "Sosis",
  "Kabak",
  "Jalepeno",
  "Domates",
  "Soğan",
  "Mısır",
];

const checkboxContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "15px",
};

const checkboxItemStyle = {
  margin: "10px 10px 10px 0",
};

const OrderForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <FormPageContainer>
      <h4 style={FormElements}>Position Absolute Acı Pizza</h4>
      <div style={PizzaName}>
        <h2>85.50₺</h2>
        <p>4.9</p>
      </div>
      <p style={FormElements}>
        Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli ve lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
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
              />{" "}<label>Küçük</label>
            </div>
            <div style={radioLabelStyle}>
              <input
                type="radio"
                name="size"
                value="medium"
                onChange={handleSizeChange}
                checked={formData.size === "medium"}
                required
              />{" "}<label>Orta</label>
            </div>
            <div style={radioLabelStyle}>
              <input
                type="radio"
                name="size"
                value="large"
                onChange={handleSizeChange}
                checked={formData.size === "large"}
                required
              />{" "}<label>Büyük</label>
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
                <option value="default">
                  Hamur Kalınlığı
                </option>
                <option value="thin">İnce</option>
                <option value="half-thick">Orta</option>
                <option value="thick">Kalın</option>
              </select>
            </div>
          </label>
        </div>
        </div>
        <div>
        <div style={checkboxContainerStyle}>
          <label>
            Ek Malzemeler:
            <div style={checkboxContainerStyle}>
              {checkboxLabels.map((label, index) => (
                <div key={index} style={checkboxItemStyle}>
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
        </div>
        <div>
        <label> İsim Soyisim:<span style={requiredIndicator}>*</span>:
          </label>
        <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
        </div>
        </div>
        <div>
        <div style={FormElements}>
          <label>
            Sipariş Notu:
          </label>
          <input
              type="text"
              name="orderNote"
              value={formData.orderNote}
              onChange={handleInputChange}
            />
        </div>
        </div>
      </form>
    </FormPageContainer>
  );
};

export default OrderForm;
