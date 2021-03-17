import CartStyles from './styles/CartStyles';
import CartItemStyles from './styles/CartItemStyles';
import { useUser } from './User';
import formatMoney from '../lib/formatMoney';
import calTotalPrice from '../lib/calTotalPrice';

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
    </CartItemStyles>
  );
}

export default function Cart() {
  const me = useUser();
  if (!me) return null;
  console.log(me);
  return (
    <CartStyles open>
      <header>
        <h2>{me.name}'s Cart</h2>
      </header>
      <ul>
        {me.cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{formatMoney(calTotalPrice(me.cart))}</p>
      </footer>
    </CartStyles>
  );
}
