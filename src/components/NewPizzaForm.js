import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './NewPizzaForm.css';

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

const extras = {
  Pepperoni: 5,
  Sarimsak: 5,
  Jambon: 5,
  Sucuk: 5,
  Ananas: 5,
  Salam: 5,
  Biber: 5,
  Kapya: 5,
  Mantar: 5,
  Sosis: 5,
  Kabak: 5,
  Jalepeno: 5,
  Domates: 5,
  Soğan: 5,
  Mısır: 5,
  Tavuk: 5
};


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
    selectedToppings: []
  });

  const [quantity, setQuantity] = useState(1);

  //+1 -1 BUTONLARININ SİPARİŞ EDİLEN PİZZA SAYISNI YAZAN FONKSİYONLAR
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  //TOTAL FİYATI HESAPLAYAN FONKSİYON
  const calculateTotalPrice = () => {
    const basePrice = 85.5;
    const toppingsPrice = formData.selectedToppings.reduce(
      (total, topping) => total + (extras[topping] || 0),
      0
    );
    return (basePrice + toppingsPrice) * quantity;
  };

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };


  //EK MALZEMELER FONKSİYONU
  const handleExtrasChange = (e) => {
    const extra = e.target.value.toLowerCase();
  
    if (formData.extras.includes(extra)) {
      setFormData({
        ...formData,
        extras: formData.extras.filter((item) => item !== extra),
        selectedToppings: formData.selectedToppings.filter(
          (topping) => topping !== extra
        ),
      });
    } else if (formData.extras.length < 10) {
      setFormData({
        ...formData,
        extras: [...formData.extras, extra],
        selectedToppings: [...formData.selectedToppings, extra],
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

      console.log("API response:", response);
      // API'den başarılı bir şekilde veri alındığında, success sayfasına yönlendiriliyor
      history.push("/success");
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  return (
    <>
      <div className="form-page">
        <form onSubmit={handleSubmit} id="pizza-form">
          <div className="dough">
            <div className="dough" id="dough-size">
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
            </div>
            <div className="dough" id="dough-thickness">
              <div id="dough-thickness">
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
            </div>
          </div>
          <div class="extra-toppings">
            <label>
              Ek Malzemeler:
              <p style={{ width: "100%" }}>
                En fazla 10 malzeme seçebilirsiniz. 5₺
              </p>
              <div className="extra-toppings, extras">
                {checkboxLabels.map((label, index) => (
                  <div className="extra-toppings, extras" key={index}>
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
          <div className="name-container">
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
                style={{ width: "578px", marginTop: "10px", padding: "10px" }}
              />
            </div>
          </div>
          <div className="order-note">
            <Label for="order-note">Sipariş Notu:</Label>
            <div>
              <Input
                type="text"
                name="orderNote"
                value={formData.orderNote}
                onChange={handleInputChange}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                style={{ width: "578px", marginTop: "10px", padding: "10px" }}
              />
            </div>
          </div>
          <hr style={{ width: "600px" }}></hr>
          <div className="counter-submit">
            <div className="counter-container">
            <Button id="decrement-button" onClick={handleDecrement}>-1</Button>
            <div id="quantity">{quantity}</div>
            <Button id="increment-button" onClick={handleIncrement}>+1</Button>
            </div>
            <div className="submit-container">
              <div>
                <p>Sipariş Toplamı</p>
                <p>Seçimler:{(formData.selectedToppings.length * 5).toFixed(2)}₺</p>
                <p>Toplam: {(calculateTotalPrice()+(formData.selectedToppings.length * 5)).toFixed(2)}₺</p>
              </div>
              <Button 
                color="primary"
                tag="input"
                type="submit"
                value="Sipariş ver"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
