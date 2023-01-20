import React from "react";
import "./NonAuth.scss";
import Navbar from "./navbar/Navbar";
import CircleSlider from "./components/CircleSlider/CircleSlider";
import Sloy2 from "./components/Sloy2/Sloy2";
import TextFrame from "./components/TextFrame/TextFrame";

function NonAuth(props) {
	return (
		<div className="non-auth">
			<Navbar />
			<div className="non-auth-container">
				<Sloy2 />
				<TextFrame />
				<CircleSlider />
			</div>
		</div>
	);
}

export default NonAuth;
