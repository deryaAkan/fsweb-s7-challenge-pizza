import React, { useState } from "react";
import axios from "axios";

const Menu = () => {
  const [orderData, setOrderData] = useState({
    pizzaType: "Margherita",
    size: "Medium",
    extras: ["Cheese", "Mushrooms"],
    deliveryAddress: "123 Pizza Street",
  });

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handlePizzaOrder = async () => {
    try {
      // Axios ile POST isteği gönderme
      const response = await axios.post("https://reqres.in/api/pizzas", orderData);

      // Gelen veriyi state'e set etme
      setResponseData(response.data);
      setError(null);
    } catch (err) {
      // Hata durumunda hata mesajını state'e set etme
      setResponseData(null);
      setError(err.message || "Bir hata oluştu");
    }
  };

  return (
    <div>
      <h1>Pizza Siparişi Demo</h1>

      <div>
        <label>Pizza Türü:</label>
        <input
          type="text"
          value={orderData.pizzaType}
          onChange={(e) => setOrderData({ ...orderData, pizzaType: e.target.value })}
        />
      </div>
      <div>
        <label>Boyut:</label>
        <input
          type="text"
          value={orderData.size}
          onChange={(e) => setOrderData({ ...orderData, size: e.target.value })}
        />
      </div>
      <div>
        <label>Ekstralar (Virgülle Ayırın):</label>
        <input
          type="text"
          value={orderData.extras.join(",")}
          onChange={(e) => setOrderData({ ...orderData, extras: e.target.value.split(",") })}
        />
      </div>
      <div>
        <label>Teslimat Adresi:</label>
        <input
          type="text"
          value={orderData.deliveryAddress}
          onChange={(e) => setOrderData({ ...orderData, deliveryAddress: e.target.value })}
        />
      </div>

      <button onClick={handlePizzaOrder}>Pizza Siparişi Ver</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {responseData && (
        <div>
          <h2>Sipariş Bilgileri</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Menu;
