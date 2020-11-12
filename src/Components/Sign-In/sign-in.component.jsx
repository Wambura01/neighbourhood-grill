import React from 'react';

import FormInput from '../Form-Input/form-input.component';

import './sign-in.scss';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.email}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default SignIn;