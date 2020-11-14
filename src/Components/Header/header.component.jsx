import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Assets/logo.svg';

import { auth } from '../../Firebase/firebase.utils';

import './header.scss';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
			<span className="logo-text">NEIGHBOURHOOD GRILL</span>
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

export default Header;
