import React from "react";
import "./Photo.scss";

function Photo() {
	return (
		<div className="photoCard">
			<div className="imageUpload">
				<div className="imageUp"></div>
				<h3 className="title">Add your profile photo</h3>
			</div>
			<form method="post" className="inputBox">
				<div>
					<h5>Firstname*</h5>
					<input type="text" placeholder="Write in your first name" />
				</div>
				<div>
					<h5>Lastname*</h5>
					<input type="text" placeholder="Write in your last name" />
				</div>
				<div>
					<h5>E-mail*</h5>
					<input type="text" placeholder="Abcdefg1234@inbox.com" />
				</div>
				<div>
					<h5>Phone Number*</h5>
					<input type="text" placeholder="+XXX (XX) XXX-XX-XX" />
				</div>
			</form>
			<button>Next</button>
		</div>
	);
}

export default Photo;
