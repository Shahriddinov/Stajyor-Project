import React from "react";
import "./Photo.scss";

function Photo() {
	return (
		<div className="photoCard">
			<div className="imageUpload">
				<div className="imageUp"></div>
				<h3>Add your profile photo</h3>
			</div>
			<div className="inputBox">
				<div>
					<h5>Firstname*</h5>
					<input type="text" placeholder="Write in your first name" />
				</div>
				<div>
					<h5>Firstname*</h5>
					<input type="text" placeholder="Write in your first name" />
				</div>
				<div>
					<h5>Firstname*</h5>
					<input type="text" placeholder="Write in your first name" />
				</div>
				<div>
					<h5>Firstname*</h5>
					<input type="text" placeholder="Write in your first name" />
				</div>
			</div>
			<button>Next</button>
		</div>
	);
}

export default Photo;
