import React, { useState } from "react";
import "./AddBookScreen.scss";
import { db, storage } from "../../Database/firebaseConfig";
import { useNavigate } from "react-router-dom";
function AddBookScreen() {
	const navigate = useNavigate();
	const [formSubmit, setformSubmit] = useState({
		name: "",
		description: "",
		price: "",
		imglink: "",
		playList: "",
	});
	const [isdownloaded, setisdownloaded] = useState(false);
	const [uploadMessage, setUploadMessage] = useState("");
	const adduserfunc = async (e) => {
		e.preventDefault();
		console.log(formSubmit);
		await db
			.collection("books")
			.add(formSubmit)
			.then(() => {
				alert("Buch erfolgreich hochgeladen.");
				navigate(`/`);
			});
	};
	const handleUpload = async (e) => {
		setUploadMessage("Bild hochladen");
		console.log(e.target.files[0]);
		const file = e.target.files[0];
		const filname = new Date().toString();
		await storage.ref().child(filname).put(file);
		const linkin = await storage.ref().child(filname).getDownloadURL();
		setformSubmit({ ...formSubmit, imglink: linkin });
		setUploadMessage("Hochladen erfolgreich");
		setisdownloaded(true);
	};
	const handleChange = (e) => {
		const name = e.target.id;
		const value = e.target.value;
		setformSubmit((prevalue) => {
			return {
				...prevalue,
				[name]: value,
			};
		});
	};

	return (
		<div className='adduserdiv'>
			<form className='adduserform' onSubmit={adduserfunc}>
				<h1 className='formHeading'>Neuen Kurs hinzufügen</h1>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Name'
					minLength={5}
					id='name'
					value={formSubmit.name}
					onChange={handleChange}
				/>
				<textarea
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Bezeichnung'
					minLength={9}
					id='description'
					value={formSubmit.description}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"number"}
					minLength={1}
					placeholder='Preis in €'
					id='price'
					value={formSubmit.price}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"url"}
					minLength={8}
					placeholder='natürlich vimeo playlist link'
					id='playList'
					value={formSubmit.playList}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"file"}
					id='file'
					onChange={handleUpload}
				/>
				{uploadMessage && <h3>{uploadMessage}</h3>}
				{isdownloaded && <button type='submit'>Kurs hinzufügen</button>}
			</form>
		</div>
	);
}
export default AddBookScreen;
