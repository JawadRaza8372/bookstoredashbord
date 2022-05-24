import React from "react";
import OrderCard from "../../Components/OrderCard/OrderCard";
import "./OrderScreen.scss";
import { useSelector } from "react-redux";
function OrderScreen() {
	const { orders } = useSelector((state) => state.project);
	return (
		<div className='orderscreen'>
			<div className='ordercards'>
				{orders.map((dat) => (
					<OrderCard
						key={dat.id}
						name={dat.userinfo.name}
						email={dat.userinfo.email}
						booksArr={dat.books}
					/>
				))}
			</div>
		</div>
	);
}

export default OrderScreen;
