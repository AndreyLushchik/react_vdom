import React, { useState } from "react";
import names from "../../names.json";
function ArrState() {
	const [people, setPeople] = useState(["Andrey", "Grigory", "Anna"]);
	const newName = () => {
		const newMember = names[Math.floor(Math.random() * 13)];
		const prevArr = [...people, newMember];
		setPeople(prevArr);
	};
	return (
		<div>
			<button onClick={newName}>Add name</button>
			{people.map((name, index) => {
				return <span key={index}>{name}</span>;
			})}
		</div>
	);
}
export default ArrState;
