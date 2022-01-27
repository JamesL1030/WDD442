import React from 'react'


class Login extends React.Component
{
	render() {
		return (
			<div id="loginContainer">
				<h1>Login</h1>
				<p>To login with github please click on the link below</p>
				<a href="https://github.com/login/oauth/authorize?client_id=bf29b95b4a6f63bb0b1e">Login With Github</a>
			</div>
		)
	}
}

export default Login
