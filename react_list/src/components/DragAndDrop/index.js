import { useState } from "react";
const arrProperties = [
	"Пепперони",
	"Анчоус",
	"Ананасы",
	"Сыр чеддер",
	"Шампиньоны",
];
function DropDown() {
	const [visible, setVisible] = useState(true);
	let arrowDirection = visible && "rotate(180deg)";
	return (
		<div className="pizza">
			<label>
				Ингредиенты
				<button
					style={{ transform: arrowDirection }}
					onClick={() => setVisible(!visible)}
				>
					🔽
				</button>
			</label>
			{visible && (
				<ul>
					{arrProperties.map((ingredient, i) => {
						return <li key={i}>{ingredient}</li>;
					})}
				</ul>
			)}
		</div>
	);
}

export default DropDown;
