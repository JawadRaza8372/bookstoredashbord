import React from "react";
import "./ChatListScreen.scss";
import ChatIcon from "@material-ui/icons/Chat";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function ChatListScreen() {
	const navigate = useNavigate();

	const { mesg } = useSelector((state) => state.project);
	console.log(mesg);
	return (
		<div className='chatlistcont'>
			<br />
			{mesg?.map((dat) => (
				<div
					onClick={() => navigate(`/chat/${dat.id}`)}
					key={dat.id}
					className='chatitem'>
					<ChatIcon id='msgicon' />
					<span>{dat.email}</span>
				</div>
			))}

			<br />
		</div>
	);
}

export default ChatListScreen;
