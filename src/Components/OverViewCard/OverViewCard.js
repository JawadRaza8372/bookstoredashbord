import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { db, storage } from "../../Database/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./OverViewCard.scss";
function OverViewCard({
	bookid,
	name,
	price,
	description,
	imglink,
	playList,
	onClickFun,
}) {
	const [showupdate, setshowupdate] = useState(false);
	const navigate = useNavigate();
	const [formSubmit, setformSubmit] = useState({
		name: name,
		description: description,
		price: price,
		imglink: imglink,
		playList: playList,
	});
	const [isdownloaded, setisdownloaded] = useState(false);
	const [uploadMessage, setUploadMessage] = useState("");
	const adduserfunc = async (e) => {
		e.preventDefault();
		console.log(formSubmit);
		await db
			.collection("books")
			.doc(bookid)
			.set(formSubmit)
			.then(() => {
				alert("Kurs aktualisiert");
				Onclickupdate();
				navigate(`/`);
			});
	};
	const handleUpload = async (e) => {
		setisdownloaded(false);

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
		setisdownloaded(true);
	};

	const Onclickupdate = () => {
		setshowupdate(!showupdate);
	};
	return (
		<>
			<div className='overviewcard'>
				<div className='columndiv'>
					<div className='rowdiv'>
						<div className='bookimg'>
							<img src={imglink} alt='book' className='showimg' />
						</div>
						<h1>{name}</h1>
					</div>
					<span>Preis: {price}€</span>
				</div>
				<p>
					{description.length > 250
						? description.substring(0, 247) + "..."
						: description}
				</p>
				<div className='rowdivsec'>
					<button onClick={Onclickupdate}>Update</button>
					<button onClick={onClickFun}>Entfernen</button>
				</div>
			</div>
			{showupdate && (
				<div className='mainmodel'>
					<div className='formContainer'>
						<form className='adduserform' onSubmit={adduserfunc}>
							<h1 className='formHeading'>Kurs aktualisieren</h1>
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
							{formSubmit.imglink && (
								<img
									src={formSubmit.imglink}
									alt='course'
									className='courseimg'
								/>
							)}
							{uploadMessage && <h3>{uploadMessage}</h3>}
							<div className='rowdivsec'>
								{isdownloaded && <button type='submit'>Update</button>}
								<button onClick={Onclickupdate}>close</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</>
	);
}

export default OverViewCard;
