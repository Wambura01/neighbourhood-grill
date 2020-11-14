import React from 'react';

import SignIn from '../../Components/Sign-In/sign-in.component';
import SignUp from '../../Components/Sign-Up/sign-up.component';

import './sign-in-and-sign-up.scss';

const SignInandSignUpPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInandSignUpPage;
