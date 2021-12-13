import { useState } from "react";
const arrProperties = [
	"Пепперони",
	"Анчоус",
	"Ананасы",
	"Сыр чеддер",
	"Шампиньоны",
];
function DropDown() {
	const [visible, setVisible] = useState(false);
	const arrowDirection = visible ? "rotate(180deg)" : "none";
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
					{arrProperties.map((ingredient) => {
						return <li key={ingredient}>{ingredient}</li>;
					})}
				</ul>
			)}
		</div>
	);
}

export default DropDown;
