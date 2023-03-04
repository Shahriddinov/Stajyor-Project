import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginDesc from "../LoginDesc";
import classes from "./Talants.module.scss";
import TalantsDesc from "./TalantsDesc";
import {talantsData} from "../../../../reduxToolkit/extraReducers.js";

function Talants(props) {

	const dispatch = useDispatch();

	useEffect( () => {
		dispatch(talantsData())
	}, [])


	return (
		<div className={classes.talants}>
			<div className="container">
				<div className={classes.talants__container}>
					<TalantsDesc />
					<LoginDesc />
				</div>
			</div>
		</div>
	);
}

export default Talants;
