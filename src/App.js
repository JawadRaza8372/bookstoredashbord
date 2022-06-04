import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navigation from "./Navigation/Navigation";
import { setAuth } from "./store/authSlice";
import { setBooks, setChat, setOrders } from "./store/projectSlice";
import { db } from "./Database/firebaseConfig";
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const cat = localStorage.getItem("chessAppAdminPanel");
		if (cat) {
			dispatch(setAuth({ auth: "avalble" }));
		}
		db.collection("books").onSnapshot((snapshot) => {
			dispatch(
				setBooks({
					books: snapshot.docs.map((doc) => ({
						id: doc.id,
						name: doc.data().name,
						description: doc.data().description,
						imglink: doc.data().imglink,
						price: doc.data().price,
						playList: doc.data().playList,
					})),
				})
			);
		});
		db.collection("chatSupport").onSnapshot((snapshot) => {
			dispatch(
				setChat({
					mesg: snapshot.docs.map((doc) => ({
						id: doc.id,
						customer: doc.data().customer,
						email: doc.data().email,
						admin: doc.data().admin,
						messages: doc.data().messages,
					})),
				})
			);
		});

		db.collection("confirmOrder")
			.orderBy("createdAt", "desc")
			.onSnapshot((snapshot) => {
				dispatch(
					setOrders({
						orders: snapshot.docs.map((doc) => ({
							id: doc.id,
							createdAt: doc.data().createdAt,
							userinfo: doc.data().userinfo,
							books: doc.data().books,
						})),
					})
				);
			});
	}, [dispatch]);

	return (
		<>
			<Navigation />
		</>
	);
}

export default App;
