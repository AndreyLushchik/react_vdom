import React, { useState, useEffect } from "react";
let btnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Pagination() {
	const [picture, setPicture] = useState([]);
	const getPicture = async (elem) => {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/photos?_page=${elem}&_limit=${10}`
		);
		const dataPicture = await response.json();
		setPicture(dataPicture);
	};
	useEffect(() => {
		getPicture();
	}, []);

	return (
		<div className="content">
			<div className="picture">
				{picture.map((post) => {
					return (
						<div key={post.id}>
							<img
								src={post.url}
								alt={post.title}
								width="150px"
								height="150px"
							/>
							<h5>{post.title}</h5>
						</div>
					);
				})}
			</div>
			<ul>
				{btnArr.map((elem, i) => {
					return (
						<li key={i}>
							<button onClick={() => getPicture(elem)}>{elem}</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Pagination;
