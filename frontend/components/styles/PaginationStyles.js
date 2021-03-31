import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  -webkit-box-align: stretch;
  align-items: stretch;
  -webkit-box-pack: center;
  place-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 10px 12px;
    border-right: 1px solid lightgray;
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: lightgray;
    pointer-events: none;
  }
`;

export default PaginationStyles;
