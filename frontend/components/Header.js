import Link from 'next/link';
import LogoStyles from './styles/LogoStyles';
import HeaderStyles from './styles/HeaderStyles';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';

export default function Header() {
  return (
    <>
      <HeaderStyles>
        <div className="bar">
          <LogoStyles>
            <Link href="/">FIGHT COVID</Link>
          </LogoStyles>
          <h3>Safety Gears Superstore</h3>
        </div>
        <Cart />
      </HeaderStyles>
      <Nav />
      <div className="sub-bar">
        <Search />
      </div>
    </>
  );
}
