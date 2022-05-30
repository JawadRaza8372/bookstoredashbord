import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DashbordScreen from "../Screens/DashbordScreen/DashbordScreen";
import AuthScreen from "../Screens/AuthScreen/AuthScreen";
import UserScreen from "../Screens/UserScreen/UserScreen";
import OrderScreen from "../Screens/OrdersScreen.js/OrderScreen";
import ChatListScreen from "../Screens/ChatListScreen/ChatListScreen";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import { useSelector } from "react-redux";
import AddBookScreen from "../Screens/AddBooks/AddBookScreen";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
function Routess() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<AuthRoute>
						<AuthScreen />
					</AuthRoute>
				}
			/>
			<Route
				path='/dashord'
				element={
					<ProtectedRoute>
						<DashbordScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/users'
				element={
					<ProtectedRoute>
						<UserScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/chat/:id'
				element={
					<ProtectedRoute>
						<ChatScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/chatlist'
				element={
					<ProtectedRoute>
						<ChatListScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/orders'
				element={
					<ProtectedRoute>
						<OrderScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/addUser'
				element={
					<ProtectedRoute>
						<AddBookScreen />
					</ProtectedRoute>
				}
			/>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
}
let ProtectedRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.auth);
	return isAuth ? children : <Navigate to='/' />;
};
let AuthRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.auth);

	return isAuth ? <Navigate to='/dashord' /> : children;
};
export default Routess;
