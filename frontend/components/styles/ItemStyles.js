import styled from 'styled-components';

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--offWhite);
  box-shadow: var(--boxShadow);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    /* display: grid; */
    /* width: 100%; */
    /* border-top: 1px solid var(--lightGray); */
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    /* grid-gap: 1px; */
    /* background: var(--lightGray); */
    & > * {
      background: var(--primary);
      color: var(--gray, black);
      border: 0;
      font-size: 2rem;
      padding: 1rem;
      &:hover {
        cursor: pointer;
      }
    }
    margin: 2rem auto;
    box-shadow: 0 1px 2px 2px rgb(0 0 0 / 4%);
    width: auto;
    background: var(--primary);
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default ItemStyles;
