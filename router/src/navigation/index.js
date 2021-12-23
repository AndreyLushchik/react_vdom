import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Figure from "../Components/Figure";

export default function Navigator() {
	return (
		<Router>
			<Route path="/:figure/:colored">
				<Figure />
			</Route>
		</Router>
	);
}
