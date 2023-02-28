import React from "react";
import downIcon from "../../../assets/images/Resume/down.png";
import "./Yourself.scss";
import { useDispatch, useSelector } from "react-redux";
import { hobbies, positions, temporary, languages } from "reduxToolkit/ResumeSlice";
import Select from "react-select";
import { useState } from "react";
import { useRef } from "react";
import "./styles.scss";
import { MultiSelect } from "@mantine/core";

function Yourself() {
	const dispatch = useDispatch();
	const positionList = useSelector(state => state.resume.positionList);
	const hobbies = useSelector(state => state.resume.hobbiesList);

	const street = useRef("");
	const description = useRef("");
	const [userChoice, setUserChoice] = useState([0, 0]);
	const [userChoice2, setUserChoice2] = useState(0);
	const [hobby, setHobby] = useState([]);
	let options = [];
	let skills = [];
	for (let i = 0; i < positionList?.length; i++) {
		options?.push({ value: [positionList[i]?.id, positionList?.indexOf(positionList[i])], label: positionList[i]?.name });
		skills?.push(positionList[i]?.skills);
	}

	let skillsList = [];
	for (let i = 0; i < skills[userChoice[1]]?.length; i++) {
		skillsList?.push({ value: skills[userChoice[1]][i].id, label: skills[userChoice[1]][i].name });
	}
	let hobbiesList = [];
	for (let i = 0; i < hobbies?.length; i++) {
		hobbiesList?.push({ value: hobbies[i].name, label: hobbies[i].name });
	}

	  const [data, setData] = useState([
  		{ value: 'react', label: 'React' },
  		{ value: 'angular', label: 'Angular' },
  		{ value: 'svelte', label: 'Svelte' },
  		{ value: 'vue', label: 'Vue' },
  		{ value: 'riot', label: 'Riot' },
  		{ value: 'next', label: 'Next.js' },
  		{ value: 'blitz', label: 'Blitz.js' },
  	  ]);

	 const [hobbiesorg, setHobbiesorg] = useState([
  		{ value: 'chess', label: 'Chess' },
  		{ value: 'table-tennis', label: 'Table tennis' },
  		{ value: 'football', label: 'football' },
  		{ value: 'reading', label: 'Reading' }
  	  ]);

	const handleSubmit = event => {
		// let payload = {
		// 	description: description.current.value,
		// 	positionId: userChoice[0],
		// 	freelancerHobbies: hobby,
		// 	freelancerSkills: userChoice2
		// };

		dispatch(temporary());
		dispatch(languages());
		event.preventDefault();
	};

	return (
		<div className='yourselfCard'>
			<h2 className="yourselfCard_title" >Write little about yourself</h2>
			<form method="post" className="yourselfCard_form" onSubmit={handleSubmit}>
				<div className="yourselfCard_form_wrapper">
					<div className="yourselfCard_form_wrapper_top" >
						<label className="yourselfCard_label" style={{'margin-bottom':'10px'}} >Select your Positions*</label>
						<Select
							required
							style={{'margin-top':'10px !important'}}
							classNamePrefix="mySelect"
							options={options}
							placeholder="Positions*"
							onChange={choice => setUserChoice(choice.value)}
						/>
					</div>
					<div  className="yourselfCard_form_wrapper_bottom" >
						<label className="yourselfCard_label" >Date of birth*</label>
						<input type="date"  required placeholder="DD/MM/YYYY" />
					</div>
				</div>
				<div>
					<label className="yourselfCard_label" >Write down your skills*</label>
					{/* <Select
						isMulti
						name="colors"
						className="basic-multi-select"
						classNamePrefix="mySelect"
						options={skillsList}
						placeholder="Skills*"
						onChange={e => setUserChoice2(Array.isArray(e) ? e.map(x => x.value) : [])}
					/> */}
					<MultiSelect  
					required

					style={{'margin-top':'8px', 'margin-bottom':'20px'}}
                      data={data}
                      placeholder="Select items or create a new"
                      searchable
                      creatable
                      getCreateLabel={(query) => `+ Create ${query}`}
                      onCreate={(query) => {
                        const item = { value: query, label: query };
                        setData((current) => [...current, item]);
                        return item;
                      }}
					  onChange={e => setUserChoice2(Array.isArray(e) ? e.map(x => x.value) : [])}
                    />
					{/* <br /> */}
					<label className="yourselfCard_label" >Hobbies*</label>
					<br />
					<MultiSelect  
					required
					style={{'margin-top':'8px', 'margin-bottom':'20px'}}
                      data={hobbiesorg}
                      placeholder="Select hobbie or create a new"
                      searchable
                      creatable
                      getCreateLabel={(query) => `+ Create ${query}`}
                      onCreate={(query) => {
                        const item = { value: query, label: query };
                        setHobbiesorg((current) => [...current, item]);
                        return item;
                      }}
					  onChange={e => setHobby(Array.isArray(e) ? e.map(x => x.value) : [])}
                    />

					<textarea className="yourselfCard_textarea" type="textarea" required placeholder="Describe yourself to buyers" ref={description} />
				</div>
				<div  className="yourselfCard_btn">
					<button  className="backButton">Back</button>
				<button  className="nextButton">Next</button>
				</div>
			</form>
		</div>
	);
}

export default Yourself;
