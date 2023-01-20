import React from "react";
import "./NavMenu.scss";
import { Link } from "react-router-dom";

function NavMenu(props) {
	return (
		<div className="navbar">
			<ul className="navbar__list">
				<li className="navbar__item active">
					<Link className="navbar__link navbar__link--active" to="/non-auth">
						Home
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/non-auth">
						Talants
					</Link>
				</li>
				<li className="navbar__item">
					<Link className="navbar__link" to="/non-auth">
						Jobs
					</Link>
				</li>

				<li className="navbar__item">
					<Link className="navbar__link" to="/non-auth">
						About us
					</Link>
				</li>

				<li className="navbar__item">
					<Link className="navbar__link" to="/non-auth">
						Contact us
					</Link>
				</li>
			</ul>

			<div className="navbar__underline"></div>
		</div>
	);
}

export default NavMenu;
