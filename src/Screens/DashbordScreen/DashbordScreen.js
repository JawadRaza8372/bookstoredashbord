import React from "react";
import { useSelector } from "react-redux";
import OverViewCard from "../../Components/OverViewCard/OverViewCard";
import { db } from "../../Database/firebaseConfig";
import "./DasbordScreen.scss";

function DashbordScreen() {
	const { books } = useSelector((state) => state.project);
	const delfunct = async (id) => {
		await db
			.collection("books")
			.doc(id)
			.delete()
			.then(() => {
				alert("successfully deleted");
			});
	};
	return (
		<section className='dashbordscreen'>
			<div className='overviewcards'>
				{books &&
					books.map((dat) => (
						<OverViewCard
							key={dat.id}
							bookid={dat.id}
							name={dat.name}
							price={dat.price}
							description={dat.description}
							imglink={dat.imglink}
							onClickFun={() => delfunct(dat.id)}
						/>
					))}
			</div>
		</section>
	);
}

export default DashbordScreen;
