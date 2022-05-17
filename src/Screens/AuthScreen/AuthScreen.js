import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";
import "./AuthScreen.scss";
function Home() {
	const [loginForm, setloginForm] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const submitFun = (e) => {
		e.preventDefault();
		console.log("submit", loginForm);
		if (loginForm.email) {
			if (loginForm.password) {
				dispatch(setAuth({ auth: "avalble" }));
				localStorage.setItem("chessAppAdminPanel", "avalble");
			}
		}
	};
	const changeText = (e) => {
		const name = e.target.id;
		const value = e.target.value;
		setloginForm((prevalue) => {
			return {
				...prevalue,
				[name]: value,
			};
		});
	};
	return (
		<section className='mainSection'>
			<div className='formContainer'>
				<h1 className='formHeading'>Admin Panel</h1>
				<form className='loginForm' onSubmit={submitFun}>
					<input
						type='email'
						placeholder='email'
						id='email'
						onChange={changeText}
					/>
					<input
						type='password'
						placeholder='password'
						id='password'
						minLength={5}
						onChange={changeText}
					/>
					<button type='submit'>Login</button>
				</form>
			</div>
		</section>
	);
}

export default Home;
