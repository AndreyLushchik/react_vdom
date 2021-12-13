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
			{people.map((name) => {
				return <span key={Math.floor(Math.random() * 1_000_000)}>{name}</span>;
			})}
		</div>
	);
}
export default ArrState;
