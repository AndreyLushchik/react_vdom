import React from "react";
import { Link, useParams } from "react-router-dom";

const Figure = () => {
	const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];
	const figures = ["circle", "square"];
	const params = useParams();
	return (
		<div>
			<div className="form">
				{figures.map((form, index) => {
					return (
						<Link
							onClick={() => (params.figure = form)}
							key={index}
							to={`/${form}/${params.colored}`}
						>
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
							onClick={() => (params.colored = color)}
							to={`/${params.figure}/${color}`}
						>
							<button>{color}</button>
						</Link>
					);
				})}
			</div>
			<div
				className={params.figure}
				style={{ background: params.colored }}
			></div>
		</div>
	);
};

export default Figure;
