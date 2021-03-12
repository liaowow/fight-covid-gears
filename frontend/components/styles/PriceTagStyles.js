import styled from 'styled-components';

const PriceTagStyles = styled.span`
  background: var(--primary);
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px 10px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export default PriceTagStyles;
