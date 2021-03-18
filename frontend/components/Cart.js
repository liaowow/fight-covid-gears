import CartStyles from './styles/CartStyles';
import CartItemStyles from './styles/CartItemStyles';
import CloseButtonStyles from './styles/CloseButtonStyles';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calTotalPrice from '../lib/calTotalPrice';
import { useCart } from '../lib/cartState';
import RemoveFromCart from './RemoveFromCart';
import Checkout from './Checkout';

function CartItem({ cartItem }) {
  const { product } = cartItem;
  if (!product) return null;
  return (
    <CartItemStyles>
      <img
        width="100"
        src={product.photo.image.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {formatMoney(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times; {formatMoney(product.price)} each
          </em>
        </p>
      </div>
      <RemoveFromCart id={cartItem.id} />
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  const { cartOpen, closeCart } = useCart();
  if (!me) return null;
  return (
    <CartStyles open={cartOpen}>
      <header>
        <CloseButtonStyles type="button" onClick={closeCart}>&times;</CloseButtonStyles>
        <h2>{me.name}'s Cart</h2>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calTotalPrice(me.cart))}</p>
        <Checkout />
      </footer>
    </CartStyles>
  );
}
