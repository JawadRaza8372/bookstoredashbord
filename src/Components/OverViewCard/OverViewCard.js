import { CircularProgressbar } from "react-circular-progressbar";
import React from "react";
import "react-circular-progressbar/dist/styles.css";

import "./OverViewCard.scss";
function OverViewCard({ name, price, description, imglink, onClickFun }) {
	return (
		<div className='overviewcard'>
			<div className='columndiv'>
				<h1>{name}</h1>
				<span>{price}</span>
			</div>
			<p>
				{description.length > 250
					? description.substring(0, 247) + "..."
					: description}
			</p>

			<button onClick={onClickFun}>Delete</button>
		</div>
	);
}

export default OverViewCard;
