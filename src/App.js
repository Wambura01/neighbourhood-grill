import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInandSignUpPage from './Pages/Sign-In-and-Sign-Up/sign-in-and-sign-up.component';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
				<Route path="/signin" component={SignInandSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
