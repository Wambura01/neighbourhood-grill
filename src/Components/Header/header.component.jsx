import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Assets/logo.svg';

import './header.scss';

const Header = () => (
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
		</div>
	</div>
);

export default Header;
