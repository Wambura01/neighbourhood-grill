import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
	[selectCartItemCount],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
			0
		)
);
