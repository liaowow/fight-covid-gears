import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import TitleStyles from './styles/TitleStyles';
import PriceTagStyles from './styles/PriceTagStyles';
import formatMoney from '../lib/formatMoney';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <Link href={`/product/${product.id}`}>
        <img
          src={product?.photo?.image?.publicUrlTransformed}
          alt={product.name}
        />
      </Link>
      <TitleStyles>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </TitleStyles>
      <PriceTagStyles>{formatMoney(product.price)}</PriceTagStyles>
      <p>{product.description}</p>
      <div className="buttonList">
        <Link href={{
          pathname: 'update',
          query: {
            id: product.id
          }
        }}>Edit</Link>
      </div>
    </ItemStyles>
  );
}
