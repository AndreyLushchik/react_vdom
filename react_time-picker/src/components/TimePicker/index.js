import React, { useState, useEffect } from "react";

const TimePicker = () => {
	const [hour, setHour] = useState(0);
	const [minute, setMinute] = useState(0);
	useEffect(() => {
		if (hour < 0) {
			setHour(23);
			setMinute(59);
		}
		if (hour > 23) {
			setHour(0);
		}
	}, [hour]);

	useEffect(() => {
		if (minute < 0) {
			setMinute(59);
			setHour(hour - 1);
		}
		if (minute > 59) {
			setMinute(0);
			setHour(hour + 1);
		}
	}, [minute]);

	const mathPlus = (typeTime) => {
		typeTime === "hour" ? setHour(hour + 1) : setMinute(minute + 1);
	};

	const mathMinus = (typeTime) => {
		typeTime === "hour" ? setHour(hour - 1) : setMinute(minute - 1);
	};

	return (
		<div>
			<div className="hour">
				<p>{hour.toString().padStart(2, 0)}</p>
				<button onClick={() => mathMinus("hour")}>-</button>
				<button onClick={() => mathPlus("hour")}>+</button>
			</div>
			<p>:</p>
			<div className="minute">
				<p>{minute.toString().padStart(2, 0)}</p>
				<button onClick={() => mathMinus("minute")}>-</button>
				<button onClick={() => mathPlus("minute")}>+</button>
			</div>
		</div>
	);
};

export default TimePicker;
