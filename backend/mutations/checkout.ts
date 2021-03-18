/* eslint-disable */
import { KeystoneContext } from '@keystone-next/types';
import { CartItemCreateInput, OrderCreateInput } from '../.keystone/schema-types';
import stripeConfig from '../lib/stripe';

const graphql = String.raw;
interface Arguments {
  token: string
}

async function checkout(
  root: any,
  { token }: Arguments,
  context: KeystoneContext
): Promise<OrderCreateInput> {
  // make sure user is signed in
  const userId = context.session.itemId;
  if(!userId) {
    throw new Error('Sorry, you must be logged in to create an order!');
  }
  // query the current user
  const user = await context.lists.User.findOne({
    where: { id: userId },
    resolveFields: graphql`
      id
      name
      email
      cart {
        id
        quantity
        product {
          name
          price
          description
          photo {
            id
            image {
              id
              publicUrlTransformed
            }
          }
        }
      }
    `,
  })
  // calculate total price for the order
  const cartItems = user.cart.filter((cartItem) => cartItem.product);
  const amount = cartItems.reduce(function(tally: number, cartItem: CartItemCreateInput) {
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
  // create charge via stripe library
  const charge = await stripeConfig.paymentIntents.create({
    amount,
    currency: 'USD',
    confirm: true,
    payment_method: token,
  }).catch(err => {
    console.log(err)
    throw new Error(err.message);
  });
  console.log(charge);
  // convert cart items to order items
  // create order and return it
}

export default checkout;
