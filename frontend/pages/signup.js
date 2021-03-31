import styled from 'styled-components';
import SignUp from '../components/SignUp';

const GridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export default function LogInPage() {
  return (
    <GridStyles>
      <SignUp />
    </GridStyles>
  );
}
