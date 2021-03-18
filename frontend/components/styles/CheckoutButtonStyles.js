import styled from 'styled-components';

const CheckoutButtonStyles = styled.button`
  background: var(--primary);
  color: black;
  font-weight: 500;
  border: 0;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  /* transform: skew(-2deg); */
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;

export default CheckoutButtonStyles;
