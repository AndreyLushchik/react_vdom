import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Figure from "../Components/Figure";

export default function Navigator() {
	return (
		<Router>
			<Redirect from="/" to="/circle/red" />
			<Route path="/:figure/:colored">
				<Figure />
			</Route>
		</Router>
	);
}
