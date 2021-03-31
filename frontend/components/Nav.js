import Link from 'next/link';
import { useCart } from '../lib/cartState';
import CartCount from './CartCount';
import SignOut from './SignOut';
import NavStyles from './styles/NavStyles';
import { useUser } from './User';

export default function Nav() {
  const user = useUser();
  const { openCart } = useCart();
  return (
    <NavStyles>
      <Link href="/products">products</Link>
      {user && (
        <>
          {/* <Link href="/sell">sell</Link> */}
          <Link href="/orders">orders</Link>
          {/* <Link href="/account">account</Link> */}
          <button type="button" onClick={openCart}>
            my cart
            <CartCount
              count={user.cart.reduce(
                (tally, cartItem) =>
                  tally + (cartItem.product ? cartItem.quantity : 0),
                0
              )}
            />
          </button>
          <SignOut />
        </>
      )}
      {!user && (
        <>
          <Link href="/login">log in</Link>
          <Link href="/signup">sign up</Link>
        </>
      )}
    </NavStyles>
  );
}
