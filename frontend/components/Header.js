import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Fight COVID</Link>
      </div>
      <Nav />
      <div className="sub-bar">
        <p>Search an Item</p>
      </div>
    </header>
  );
}
