import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/authSlice";
import "./AuthScreen.scss";
function Home() {
	const [loginForm, setloginForm] = useState({ email: "", password: "" });
	const dispatch = useDispatch();
	const submitFun = (e) => {
		e.preventDefault();
		if (loginForm.email && loginForm.password) {
			if (
				loginForm.email === "admin@admin.com" &&
				loginForm.password === "admin123"
			) {
				dispatch(setAuth({ auth: "avalble" }));
				localStorage.setItem("chessAppAdminPanel", "avalble");
			} else {
				alert("Falsche Anmeldeinformationen.");
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
				<h1 className='formHeading'>Schach online lernen</h1>
				<form className='loginForm' onSubmit={submitFun}>
					<input
						type='email'
						placeholder='email'
						id='email'
						onChange={changeText}
						minLength={5}
						required={true}
					/>
					<input
						type='password'
						placeholder='passwort'
						id='password'
						minLength={5}
						onChange={changeText}
						required={true}
					/>
					<button type='submit'>Anmeldung</button>
				</form>
			</div>
		</section>
	);
}

export default Home;
