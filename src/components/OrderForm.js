import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./NewPizzaForm.css";
import { useEffect } from "react";
import SubmitButton from "./SubmitButton";

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
  Tavuk: 5,
};

const requiredIndicator = {
  color: "red",
  marginLeft: "5px",
};

export default function NewPizzaForm({ onPizzaOrder, formData, setFormData}) {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleDoughChange = (e) => {
    setFormData({
      ...formData,
      dough: e.target.value,
    });
  };

  const calculateTotalPrice = () => {
    const toppingsPrice = formData.selectedToppings.reduce(
      (total, topping) => total + (extras[topping] || 0),
      0
    );
    return (formData.price + toppingsPrice) * quantity;
  };

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };
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
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (submitSuccess) {
      console.log("Form başarıyla gönderildi!");
    }
  }, [submitSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.fullName.length < 2) {
    
      alert('İsim alanına en az 2 karakter yazılmalıdır.');
      return;
    }
  
    try {
      const response = await axios.post(
        "https://reqres.in/api/users",
        formData
      );
  
      const pizzaDetails = {
        name: formData.name,
        price: calculateTotalPrice(),
        extras: formData.selectedToppings.map((topping) => checkboxLabels[parseInt(topping, 10)]),
      };
  
      console.log("Pizza Details:", pizzaDetails);
      console.log("API Response:", response);
  
      setSubmitSuccess(true);
      onPizzaOrder({ formData, apiResponse: response.data });

      history.push({
        pathname: "/success",
        state: { formData: formData, apiResponse: response.data },
      });
    } catch (error) {
      console.error("API request error:", error);
      setErrorMessage(
        "Sipariş gönderilemedi. İnternet bağlantınızı kontrol edin."
      );
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
                      value={formData.dough}
                      onChange={handleDoughChange}
                    >
                      <option value="default">Hamur Kalınlığı</option>
                      <option value="thin">İnce</option>
                      <option value="half-thick">Az Kalın</option>
                      <option value="thick">Kalın</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="extra-toppings">
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
          <div className="order-note" id="special-text">
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
              <Button id="decrement-button" onClick={handleDecrement}>
                -1
              </Button>
              <div id="quantity">{quantity}</div>
              <Button id="increment-button" onClick={handleIncrement}>
                +1
              </Button>
            </div>
            <div className="submit-container">
              <div>
                <p>Sipariş Toplamı</p>
                <p>
                  Seçimler:{(formData.selectedToppings.length * 5).toFixed(2)}₺
                </p>
                <p>
                  Toplam:{" "}
                  {(
                    calculateTotalPrice() +
                    formData.selectedToppings.length * 5
                  ).toFixed(2)}
                  ₺
                </p>
              </div>
              <SubmitButton/>
              {errorMessage && (
                <div style={{ color: "red" }}>{errorMessage}</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
