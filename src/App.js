import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { auth } from './Firebase/firebase.utils';

import HomePage from './Pages/Homepage/homepage.component';
import ShopPage from './Pages/Shop/shop.component';
import Header from './Components/Header/header.component';
import SignInandSignUpPage from './Pages/Sign-In-and-Sign-Up/sign-in-and-sign-up.component';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });

			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInandSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
