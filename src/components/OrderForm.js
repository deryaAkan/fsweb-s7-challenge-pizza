import React, { useState } from "react";
import { Input, Label, Button } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./OrderForm.css";
import { useEffect } from "react";
import SubmitButton from "./SubmitButton";

const toppingsData = [
  { name: "Pepperoni", price: 5 },
  { name: "Pepperoni", price: 5},
  { name: "Sarımsak", price: 5 },
  { name: "Jambon", price: 5 },
  { name: "Sucuk", price: 5 },
  { name: "Ananas", price: 5 },
  { name: "Salam", price: 5 },
  { name: "Biber", price: 5 },
  { name: "Kapya", price: 5 },
  { name: "Mantar", price: 5 },
  { name: "Sosis", price: 5 },
  { name: "Jalepeno", price: 5 },
  { name: "Domates", price: 5 },
  { name: "Soğan", price: 5 },
  { name: "Mısır", price: 5 },
  { name: "Kapya Biber", price: 5 },
  { name: "Nohut", price: 5 },

];

const requiredIndicator = {
  color: "red",
  marginLeft: "5px",
};

export default function NewPizzaForm({ handlePizzaOrder }) {
  const history = useHistory();
  const [quantity, setQuantity] = useState(1);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [formData, setFormData] = useState({
    name: "Position Absolute Acı Pizza",
    toppings: [],
    size: "",
    fullName: "",
    orderNote: "",
    price: 85.50,
  });

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

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };
  const handleExtrasChange = (e) => {
    const topping = e.target.value.toLowerCase();

    if (formData.toppings.includes(topping)) {
      setFormData({
        ...formData,
        toppings: formData.toppings.filter((item) => item !== topping),
      });
    } else if (formData.toppings.length < 10) {
      setFormData({
        ...formData,
        toppings: [...formData.toppings, topping],
      });
    }
  };

  const calculateTotalPrice = () => {
    const toppingsPrice = formData.toppings.reduce((total, topping) => {
      const matchingTopping = toppingsData.find((t) => t.name.toLowerCase() === topping);
      return total + (matchingTopping ? matchingTopping.price : 0);
    }, 0);

    return (formData.price + toppingsPrice) * quantity;
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
      alert("İsim alanına en az 2 karakter yazılmalıdır.");
      return;
    }


    axios.post("https://reqres.in/api/users",  {...formData, totalPrice: calculateTotalPrice() })
    .then(function (response) {
      console.log("API Response:", response);

      setSubmitSuccess(true);
      handlePizzaOrder(response.data);

      history.push( "/success"
      );
    })

    .catch(function (error) {
      console.error("API request error:", error);
      setErrorMessage(
        "Sipariş gönderilemedi. İnternet bağlantınızı kontrol edin."
      );
    });
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
                {["S", "M", "L"].map((size) => (
                  <div key={size}>
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      onChange={handleSizeChange}
                      checked={formData.size === size}
                      required
                    />{" "}
                    <label>
                      {size === "S"
                        ? "küçük"
                        : size === "M"
                        ? "Orta"
                        : "Büyük"}
                    </label>
                  </div>
                ))}
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
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Hamur Seç:
                    </option>
                    {[
                      { value: "ince", label: "İnce" },
                      { value: "orta", label: "Orta" },
                      { value: "kalin", label: "Kalın" },
                    ].map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        required
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="extra-toppings">
          <label>
            <h4>Ek Malzemeler</h4>
            <p style={{ width: "100%", color: "#5F5F5F" }}>
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <div className="extra-toppings extras">
            {toppingsData.map((topping, index) => (
    <div className={`extra-toppings extras ${index === 0 ? 'invisible' : ''}`} key={index}>
      <label htmlFor={`topping-checkbox-${index}`}>
        <input
          id={`topping-checkbox-${index}`}
          data-cy={`topping-${index}`}
          type="checkbox"
          name={`topping-${index}`}
          value={topping.name.toLowerCase()} 
          onChange={handleExtrasChange}
          checked={formData.toppings.includes(topping.name.toLowerCase())}
          disabled={index === 0}
        />
        {topping.name}
                  </label>
                </div>
              ))}
            </div>
          </label>
        </div>
        <div className="name-container">
          <Label for="customerName">
           İsminizi giriniz<span style={requiredIndicator}>*</span>:
          </Label>
          <div>
            <Input
              data-cy="customer-name"
              id="name-input"
              name="fullName"
              placeholder="İsim Soyisim"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="order-note" id="special-text">
          <Label for="order-note">Sipariş Notu:</Label>
          <div>
            <Input
              id="order-note"
              type="text"
              name="orderNote"
              value={formData.orderNote}
              onChange={handleInputChange}
              placeholder="Siparişinize eklemek istediğiniz bir şey var mı?"
            />
          </div>
        </div>
        <hr></hr>
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
                Seçimler:{(formData.toppings.length * 5).toFixed(2)}₺
              </p>
              <p>
                Toplam:{" "}
                {(
                  calculateTotalPrice() +
                  formData.toppings.length * 5
                ).toFixed(2)}
                ₺
              </p>
            </div>
            <SubmitButton onClick={handleSubmit} />
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
