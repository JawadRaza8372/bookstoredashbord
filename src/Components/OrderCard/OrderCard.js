import React from "react";
import { useSelector } from "react-redux";
import "./OrderCard.scss";
function OrderCard({ name, email, booksArr }) {
	const { books } = useSelector((state) => state.project);
	let bookstring = "";
	booksArr.map((dat) => {
		let data = books.find((dac) => dac.id === dat.id);
		if (data) {
			bookstring = bookstring + data.name + ",";
		}
		return null;
	});

	return (
		<div className='orderCard'>
			<div>
				<span>Email:</span>
				<p>{email}</p>
			</div>
			<div>
				<span>Name:</span>
				<p>{name}</p>
			</div>
			<div>
				<span>Books:</span>
				<p>{bookstring}</p>
			</div>
		</div>
	);
}

export default OrderCard;
