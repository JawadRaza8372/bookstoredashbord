import React from "react";
import "./MyMsg.scss";
function MyMsg({ isSender, msg }) {
	return (
		<>
			{isSender ? (
				<div className='rightdiv'>
					<p style={{ fontWeight: "bold" }}>{msg}</p>
				</div>
			) : (
				<div className='leftdiv'>
					<p style={{ fontWeight: "bold" }}>{msg}</p>
				</div>
			)}
		</>
	);
}

export default MyMsg;
