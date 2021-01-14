import React from 'react';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import './styles.scss';

const PaymentDetails = ({}) => {
  const handleFormSubmit = async evt => {
    evt.preventDefault();
  }

  return (
    <div className="paymentDetails">
      <form onSubmit={handleFormSubmit}>

      <div className="group">
        <h2>
          Shipping Address
        </h2>

        <FormInput
          placeholder="Recipient Name"
          type="text"
        />

        <FormInput
          placeholder="Line 1"
          type="text"
        />

        <FormInput
          placeholder="Line 2"
          type="text"
        />

        <FormInput
          placeholder="City"
          type="text"
        />

        <FormInput
          placeholder="State"
          type="text"
        />

        <FormInput
          placeholder="Postal Code"
          type="text"
        />

      </div>

      <div className="group">
        <h2>
          Billing Address
        </h2>

        <FormInput
          placeholder="Cardholder's Name"
          type="text"
        />

        <FormInput
          placeholder="Line 1"
          type="text"
        />

        <FormInput
          placeholder="Line 2"
          type="text"
        />

        <FormInput
          placeholder="City"
          type="text"
        />

        <FormInput
          placeholder="State"
          type="text"
        />

        <FormInput
          placeholder="Postal Code"
          type="text"
        />

      </div>

      <div className="group">
        <h2>
          Card Details
        </h2>
      </div>

      </form>
    </div>
  );
}

export default PaymentDetails;
