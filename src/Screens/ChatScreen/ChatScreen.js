import React, { useState } from "react";
import "./ChatScreen.scss";
import SendIcon from "@material-ui/icons/Send";
import MyMsg from "../../Components/MyMsg/MyMsg";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { db } from "../../Database/firebaseConfig";
function ChatScreen() {
	const [message, setMessage] = useState("");
	const { id } = useParams();
	const { mesg } = useSelector((state) => state.project);
	const filterd = mesg?.length > 0 && mesg?.find((dat) => dat.id === id);
	const sendmesg = async () => {
		await db
			.collection("chatSupport")
			.doc(`${id}`)
			.update({
				messages:
					filterd.messages.length > 0
						? [...filterd.messages, { mesg: message, sender: "admin" }]
						: [{ mesg: message, sender: "admin" }],
				createdAt: new Date(),
			})
			.then(() => {
				console.log("checking");
				setMessage("");
			});
	};
	return (
		<div className='chatContainer'>
			<div className='maindiv'>
				<div className='chatheader'>{filterd.email}</div>
				<div className='msgcontainer'>
					{filterd &&
						filterd.messages.map((dat, index) => (
							<MyMsg
								key={index}
								isSender={dat.sender === "admin" ? true : false}
								msg={dat.mesg}
							/>
						))}
				</div>
				<div className='msgsender'>
					<input
						type={"text"}
						placeholder='Your messgare here'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button onClick={sendmesg}>
						<SendIcon id='FORWARD' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ChatScreen;
