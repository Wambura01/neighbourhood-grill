import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/homepage.component';

const StartersPage = () => (
	<div>
		<h1>Starters Page</h1>
	</div>
);

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/starters" component={StartersPage} />
			</Switch>
		</div>
	);
}

export default App;
