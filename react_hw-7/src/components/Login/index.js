import React, { Component } from "react";

class Login extends Component {
	state = {
		isSigned: false,
	};
	logginUser = () => {
		this.setState({ isSigned: true });
	};
	onButtonCklick = () => {
		setTimeout(this.logginUser, 3000);
	};
	render() {
		return this.state.isSigned ? (
			<span>Hello User</span>
		) : (
			<button onClick={this.onButtonCklick}>Sign in</button>
		);
	}
}

export default Login;
