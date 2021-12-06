import React, { Component } from "react";

class Login extends Component {
	state = {
		isSigned: false,
	};
	onButtonCklick = () => {
		this.setState({ isSigned: true });
	};
	render() {
		return this.state.isSigned === true ? (
			<span>Hello User</span>
		) : (
			<button onClick={setTimeout(this.onButtonCklick, 3000)}>Sign in</button>
		);
	}
}

export default Login;
