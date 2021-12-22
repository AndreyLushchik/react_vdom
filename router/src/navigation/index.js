import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Figure from "../Components/Figure";

export default function Navigator() {
	return (
		<Router>
			<Figure path="/form/:figure/:color" />
		</Router>
	);
}
