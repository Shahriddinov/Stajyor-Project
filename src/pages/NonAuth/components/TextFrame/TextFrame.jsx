import React from "react";
import { Link } from "react-router-dom";
import "./TextFrame.scss";

function TextFrame(props) {
	return (
		<div className="text-frame">
			<div className="text-frame-title">
				<h2>Search Talants !</h2>
			</div>
			<div className="text-frame-subtitle">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
					officia.
				</p>
			</div>
			<div className="text-frame-btn">
				<Link to="/non-auth">
					<button>Post</button>
				</Link>
			</div>
		</div>
	);
}

export default TextFrame;
