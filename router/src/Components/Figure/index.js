import React, { useState } from "react";
import { Link } from "react-router-dom";

const Figure = () => {
	const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];
	const figure = ["circle", "square"];
	const [elem, setElem] = useState("circle");
	const [color, setColor] = useState("red");
	return (
		<div>
			<div className="form">
				{figure.map((form) => {
					return (
						<Link onClick={() => setElem(form)} to={`/${form}/${color}`}>
							<button>{form}</button>
						</Link>
					);
				})}
			</div>
			<div className="colors">
				{colors.map((color, index) => {
					return (
						<Link
							key={index}
							onClick={() => setColor(color)}
							to={`/${elem}/${color}`}
						>
							<button>{color}</button>
						</Link>
					);
				})}
			</div>
			<div className={elem} style={{ background: color }}></div>
		</div>
	);
};

export default Figure;
