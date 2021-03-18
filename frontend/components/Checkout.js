import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import nProgress from 'nprogress';
import { useState } from 'react';
import styled from 'styled-components';
import CheckoutButtonStyles from './styles/CheckoutButtonStyles';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  async function handleSubmit(e) {
    e.preventDefault();
    // turn on loader
    setLoading(true);
    // start the page transition
    nProgress.start();
    // create payment method via stripe (token comes back if successful)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log(paymentMethod);
    // handle any errors from stripe
    if (error) {
      setError(error);
    }
    // send token to keystone server via custom mutation
    // change the page to View Order
    // close the cart
    // turn off loader
    setLoading(false);
    nProgress.done();
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 'small' }}>{error.message}</p>}
      <CardElement />
      <CheckoutButtonStyles>Check Out</CheckoutButtonStyles>
    </CheckoutFormStyles>
  );
}

export default function Checkout() {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
}
