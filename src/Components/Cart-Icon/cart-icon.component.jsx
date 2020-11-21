import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../Assets/shopping-bag.svg';

import { toggleCartHidden } from '../../Redux/Cart/cart.actions';
import { selectCartItemCount } from '../../Redux/Cart/cart.selectors';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
	<div className="cart-icon" onClick={toggleCartHidden}>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemCount(state),
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
