import React, { Component } from "react";

class SayHi extends Component {
	state = {
		loading: <div className="loader"></div>,
		greeting: <button onClick={() => this.loader()}>Say Hi!</button>,
	};
	loader = () => {
		this.setState({ greeting: this.state.loading });
		setTimeout(this.sayHi, 3000);
	};
	sayHi = () => {
		this.setState({ greeting: <span>Hello</span> });
	};
	render() {
		return <div className="framePreload">{this.state.greeting}</div>;
	}
}

export default SayHi;
