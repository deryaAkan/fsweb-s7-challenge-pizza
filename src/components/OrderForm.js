// OrderForm.js
import React, { useState } from "react";
import styled from "styled-components";

const FormPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const form1 = {
  display: "flex",
  justifyContent: "flex-start",
  width: "40%",
  gap: "30%",
};

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    toppings: [],
    size: "",
  });

  const handleSizeChange = (e) => {
    setFormData({
      ...formData,
      size: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <FormPageContainer>
      <p style={form1}>
        lorem ipsum cfvghbjnkmleföv lsgkfbnwvnmrşkflb vkrş
        ovmqkelrnqkvınuwoeıjrşmitwlvkt jevlmkarknlveıotmkvlkrltnvlrsmkv
        rltnkjvklmsrtv klskjnertklvmae ktvlbenvklme ımvkaelvkaenrjvklme arae
      </p>
      <form onSubmit={handleSubmit} style={form1}>
        <div id="boyut-sec">
          <label>
            Boyut Seç:
            <div>
              <input
                type="radio"
                name="size"
                value="small"
                onChange={handleSizeChange}
                checked={formData.size === "small"}
              />{" "}
              Küçük
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="medium"
                onChange={handleSizeChange}
                checked={formData.size === "medium"}
              />{" "}
              Orta
            </div>
            <div>
              <input
                type="radio"
                name="size"
                value="large"
                onChange={handleSizeChange}
                checked={formData.size === "large"}
              />{" "}
              Büyük
            </div>
          </label>
        </div>
        <div>Hamur Seç:</div>
      </form>
    </FormPageContainer>
  );
};

export default OrderForm;
