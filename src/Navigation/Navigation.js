import React from "react";
import { useLocation } from "react-router-dom";
import Routess from "./Routess";
import AnimatedSideBar from "../Components/SideBar/AnimatedSideBar";
function Navigation() {
	const location = useLocation()?.pathname;
	console.log(location);
	return (
		<>
			{location === "/addUser" ||
			location === "/orders" ||
			location === "/chatlist" ||
			location === "/dashord" ||
			location.includes("/chat/") ? (
				<AnimatedSideBar>
					<Routess />
				</AnimatedSideBar>
			) : (
				<Routess />
			)}
		</>
	);
}

export default Navigation;
