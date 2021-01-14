import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';
import './styles.scss';

const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

const PaymentDetails = ({}) => {
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

  const handleBilling = evt => {
    const { name, value } = evt.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value
    });
  };

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
          name="recipientName"
          handleChange={evt => setRecipientName(evt.target.value)}
          value={recipientName}
          type="text"
        />

        <FormInput
          placeholder="Line 1"
          name="line1"
          handleChange={evt => handleShipping(evt)}
          value={shippingAddress.line1}
          type="text"
        />

        <FormInput
          placeholder="Line 2"
          name="line2"
          handleChange={evt => handleShipping(evt)}
          value={shippingAddress.line2}
          type="text"
        />

        <FormInput
          placeholder="City"
          name="city"
          handleChange={evt => handleShipping(evt)}
          value={shippingAddress.city}
          type="text"
        />

        <FormInput
          placeholder="State"
          name="state"
          handleChange={evt => handleShipping(evt)}
          value={shippingAddress.state}
          type="text"
        />

        <FormInput
          placeholder="Postal Code"
          name="postal_code"
          handleChange={evt => handleShipping(evt)}
          value={shippingAddress.postal_code}
          type="text"
        />

        <div className="formRow checkoutInput">
          <CountryDropdown
            value={shippingAddress.country}
            valueType="short"
          />
        </div>

      </div>

      <div className="group">
        <h2>
          Billing Address
        </h2>

        <FormInput
          placeholder="Cardholder's Name"
          name="cardholderName"
          handleChange={evt => setCardholderName(evt.target.value)}
          value={cardholderName}
          type="text"
        />

        <FormInput
          placeholder="Line 1"
          name="line1"
          handleChange={evt => handleBilling(evt)}
          value={billingAddress.line1}
          type="text"
        />

        <FormInput
          placeholder="Line 2"
          name="line2"
          handleChange={evt => handleBilling(evt)}
          value={billingAddress.line2}
          type="text"
        />

        <FormInput
          placeholder="City"
          name="city"
          handleChange={evt => handleBilling(evt)}
          value={billingAddress.city}
          type="text"
        />

        <FormInput
          placeholder="State"
          name="state"
          handleChange={evt => handleBilling(evt)}
          value={billingAddress.state}
          type="text"
        />

        <FormInput
          placeholder="Postal Code"
          name="postal_code"
          handleChange={evt => handleBilling(evt)}
          value={billingAddress.postal_code}
          type="text"
        />

        <div className="formRow checkoutInput">
          <CountryDropdown
            value={billingAddress.country}
            valueType="short"
          />
        </div>

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
