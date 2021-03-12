import Link from 'next/link';
import LogoStyles from './styles/LogoStyles';
import HeaderStyles from './styles/HeaderStyles';
import Nav from './Nav';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <LogoStyles>
          <Link href="/">Fight COVID</Link>
        </LogoStyles>
      </div>
      <Nav />
      <div className="sub-bar">
        <p>Search an Item</p>
      </div>
    </HeaderStyles>
  );
}
