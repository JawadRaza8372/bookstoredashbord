import React, { useState } from "react";
import "./AnimatedSideBar.scss";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Chat";
import OrderIcon from "@material-ui/icons/ListAltOutlined";
import AddBox from "@material-ui/icons/AddBox";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";
import LinkButton from "./LinkButton";
function AnimatedSideBar({ children }) {
	const [expand, setexpand] = useState(false);
	const dispatch = useDispatch();
	const navArry = [
		{ title: "Dashboard", icon: <HomeIcon id='navIcon' />, link: "/dashord" },
		{ title: "Order", icon: <OrderIcon id='navIcon' />, link: "/orders" },
		{ title: "Chat", icon: <ChatIcon id='navIcon' />, link: "/chatlist" },
		{ title: "Add Book", icon: <AddBox id='navIcon' />, link: "/addUser" },
	];
	return (
		<section className='mainContainer'>
			<div className={expand ? "sidebar active" : "sidebar"}>
				<div className='logoContent'>
					<div className='logo'>
						<AcUnitIcon id='logoicon' />
						<div className='logoName'>Jawad Raza</div>
					</div>
					{expand ? (
						<CloseIcon id='menuIcon' onClick={() => setexpand(false)} />
					) : (
						<MenuIcon id='menuIcon' onClick={() => setexpand(true)} />
					)}
				</div>
				<ul className='navList'>
					{navArry.map((dat, index) => (
						<li key={index}>
							<LinkButton title={dat.title} link={dat.link}>
								{dat.icon}
							</LinkButton>
						</li>
					))}
				</ul>
				<div className='profileContent'>
					<div
						onClick={() => {
							localStorage.removeItem("chessAppAdminPanel");
							dispatch(setAuth({ isAuth: "" }));
						}}
						className='profile'>
						<LogoutIcon id='logoutbutton' />

						<span className='username'>Logout</span>
					</div>
				</div>
			</div>
			<div className='mainContentContainer'>{children}</div>
		</section>
	);
}

export default AnimatedSideBar;
