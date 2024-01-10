import React from 'react';
import './OrderForm.css';
import { Button } from 'reactstrap';

export default function SubmitButton() {
    return <>
    <Button
                id="order-button"
                color="primary"
                tag="input"
                type="submit"
                value="Sipariş ver"
              />
    </>
}