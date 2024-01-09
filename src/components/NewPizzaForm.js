import React, {useState} from "react";
import styled from "styled-components";

const FormPage = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
`;


//BOY SEÇ VE HAMUR SEÇ KISMI
const DoughSizeAndThickness = styled.div`
    width: 600px;
    height: 30vh;
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


const requiredIndicator = {
    color: "red",
    marginLeft: "5px",
  };


export default function NewPizzaForm(){

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



    return <>
    <FormPage>
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
            <div >
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
            <div >
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


   </FormPage>
    </>
}