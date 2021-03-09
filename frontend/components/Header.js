import Link from 'next/link';
import Logo from './styles/Logo';
import HeaderStyles from './styles/HeaderStyles';
import Nav from './Nav';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Fight COVID</Link>
        </Logo>
      </div>
      <Nav />
      <div className="sub-bar">
        <p>Search an Item</p>
      </div>
    </HeaderStyles>
  );
}
