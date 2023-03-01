import Round from "components/Round/Round.jsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Background.module.scss";
import back from "../../../assets/images/Resume/back.png";
import CareerSlider from "../CareerSlider/CareerSlider";
import { useSelector } from "react-redux";
import "./Background.scss";
import { useDispatch } from "react-redux";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { cards, dot } from "./information";
import { removeToken } from "reduxToolkit/loginSlice/LoginSlice";

function Background() {
	const { activeCard } = useSelector(state => state.resumeControle);
	const len = useSelector(state => state.lenguage.lenguage);
	const {activeDote} = useSelector(state => state.resumeControle)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		dispatch(removeToken()) 
		localStorage.clear()
		navigate(`/${len}/`)
	}
	return (
		<>
			<div className={classes.allBackground}>
				<div className="container">
					<div className={classes.allBackground_inner}>
						<div className={classes.backSign}>
							<button onClick={handleClick} className={classes.backSign_btn}>
								<img src={back} alt="back sign" />
								Back to sign up
							</button>

							<div className={classes.round}>
								<Round />
							</div>
						</div>

						<div className={classes.cards}>
							{cards.map(el => (
								<div
									className={`${classes.card_box} ${el.type === activeCard.type ? classes.active : ""}`}
									key={el.id}
									style={{ top: el.id < activeCard.id ? "-200%" : el.id === activeCard.id ? "12%" : "200%" }}>
									{el.label}
								</div>
							))}
						</div>

						<div className={classes.career}>
							<CareerSlider dot = {dot} activeDote = {activeDote}/>
						</div>
					</div>
				</div>
			</div>
			{
				isExperienceModal && <MyWork />
			}
			{
				isEducationModal && <AddEducations />
			}

		</>
	);
}

export default Background;
