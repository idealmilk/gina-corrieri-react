import React from 'react';
import PaymentDetails from './../../components/PaymentDetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './../../stripe/config';
import MetaDecorator from './../../components/MetaDecorator';

const stripePromise = loadStripe(publishableKey);

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <MetaDecorator
        title="Payment | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <PaymentDetails />
    </Elements>
  );
}

export default Payment;
