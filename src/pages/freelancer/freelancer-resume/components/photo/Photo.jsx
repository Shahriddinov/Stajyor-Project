import { useRef, useState } from "react";
import { useEffect } from "react";
import "./Photo.scss";
import { useDispatch, useSelector } from "react-redux";
import { activeDoteAction } from "src/store/resumeControlsSlice/resumeControls";
import { getCountryList } from "src/store/extraReducers";
import { firstStep, socialStep } from "src/store/frilanserCardSlice/frilanserCardSlice";
import InputMask from "react-input-mask";
import Input from "src/components/Input";
import { useInput } from "src/hooks";
import OutlinedButton from "src/components/outlined-button";
import changeIcon from 'src/assets/images/Resume/change.png'
import photoIcon from 'src/assets/images/Resume/image.svg'
import { addData } from "src/store/freelancer-resume/freelancerResume";

function Photo() {
	const inputRef = useRef();
	const [image, setImage] = useState("");

	const dispatch = useDispatch();

	const readURL = input => {
		if (input.files && input.files[0]) {
			const reader = new FileReader();

			reader.onload = e => {
				setImage(e.target.result)
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	const handleClick = () => {
		inputRef.current.click();
	}
	const inputChange = (e) => {
		readURL(e.target);
	}

	const {
		inputChange: nameInputChange,
		inputBlur: nameInputBlur,
		inputTouch: nameInputTouch,
		inputReset: nameInputClear,
		value: name,
		inputIsValid: nameIsValid,
		inputIsError: nameInputIsError,
	} = useInput(name => name.length > 0);
	const {
		inputChange: surnameInputChange,
		inputBlur: surnameInputBlur,
		inputTouch: surnameInputTouch,
		inputReset: surnameInputClear,
		value: surname,
		inputIsValid: surnameIsValid,
		inputIsError: surnameInputIsError,
	} = useInput(surname => surname.length > 0);
	const {
		inputChange: emailInputChange,
		inputBlur: emailInputBlur,
		inputTouch: emailInputTouch,
		inputReset: emailInputClear,
		value: email,
		inputIsValid: emailIsValid,
		inputIsError: emailInputIsError,
	} = useInput(email => email.includes('@'));
	const {
		inputChange: phoneInputChange,
		inputBlur: phoneInputBlur,
		inputTouch: phoneInputTouch,
		inputReset: phoneInputClear,
		value: phone,
		inputIsValid: phoneIsValid,
		inputIsError: phoneInputIsError,
	} = useInput(phone => phone.length > 18);

	const handleSubmit = event => {
		event.preventDefault();

		nameInputTouch();
		surnameInputTouch();
		emailInputTouch();
		phoneInputTouch();

		if (nameIsValid && surnameIsValid && emailIsValid && phoneIsValid) {
			dispatch(activeDoteAction([{ id: 2, label: "Address" }, { id: 2, type: "country" }]));
			const data = {image,name,surname,email,phone}
			dispatch(addData(data));
		}
	};

	return (
		<div className="photoCard">
			<div className="avatar-wrapper">
				<img className="profile-pic" src={image} />
				<div className="upload-button" onClick={handleClick}>
					{image && <img src={changeIcon} alt="" />}
					{!image && <img src={photoIcon} alt="" />}
				</div>
				<input ref={inputRef} onChange={inputChange} className="file-upload" type="file" accept="image/*" />
			</div>
			<h3 className="title">Add your profile photo</h3>

			<form onSubmit={handleSubmit}>
				<div className="inputBox">
					<Input
						type="text"
						label="First Name*"
						placeholder="First Name"
						inputIsError={nameInputIsError}
						value={name}
						inputChange={nameInputChange}
						inputBlur={nameInputBlur}
					/>
					<Input
						type="text"
						label="Last Name*"
						placeholder="Last Name"
						inputIsError={surnameInputIsError}
						value={surname}
						inputChange={surnameInputChange}
						inputBlur={surnameInputBlur}
					/>
					<Input
						type="text"
						label="Email*"
						placeholder="Your Email"
						inputIsError={emailInputIsError}
						value={email}
						inputChange={emailInputChange}
						inputBlur={emailInputBlur}
					/>
					<Input
						mask="+\9\98 (99) 999-99-99"
						label="Phone*"
						placeholder="Phone Number"
						inputIsError={phoneInputIsError}
						value={phone}
						inputChange={phoneInputChange}
						inputBlur={phoneInputBlur}
					/>
				</div>
				<OutlinedButton type="submit" title="Next" />
			</form>
		</div>
	);
}

export default Photo;