import React from 'react';
import Round from 'pages/NonAuth/Round';
import Cart from '../Freelancer/components/Cart';
import '../Freelancer/Freelancer.scss';
import Fillter from '../Freelancer/components/Fillter'
import serach_icon from '../../assets/images/Freelancer/serach_inp.svg'
import "./talants.scss"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { talantsData } from '../../reduxToolkit/extraReducers.js';

const Talants = () => {
    const [activeControl, setActiveControl] = useState("best-matches")
    const controlsData = [
        {id:1,type: "best-matches", label: "Best matches"},
        {id:2,type: "recent", label: "Recent"},
        {id:3,type: "saved", label: "Saved"},
    ]

    const dispatch = useDispatch();
    const data = useSelector(state => state.talant.data)
    const loading = useSelector( state => state.talant.loading )


	useEffect( () => {
		dispatch(talantsData())
	}, [])

    



  return (
    <section className='freelancer' >
        <div className="freelancer_container">
            
            <div>
                <form className='freelancer_container_outline' >
                    <input type="text" placeholder='Title, keywords...' className='freelancer_container_outline_inp' />
                    <button type='submit' className='freelancer_container_outline_btn' ><img src={serach_icon} alt="search icon" /></button>
                </form>

                <ul className="talants__control_list">
                    {
                        controlsData.map(el => (
                            <li 
                            key={el.id}
                            className={`talants__control_item ${el.type === activeControl ? "talants__control_item-active" : null }`}
                            onClick={() => setActiveControl(el.type)}
                            >
                                {el.label}
                            </li>
                        ))
                    }
                </ul>

                { data.length > 0 ? data.map( (item, index) => (
                    <Cart item={item} key={index}/>
                )): <p>Loading..</p> }

                {/* <Cart /> */}
                {/* <Cart />
                <Cart />
                <Cart /> */}

                {/* <div className='freelancer_container_round'>
                    <Round />
                </div> */}
            </div>
            <Fillter />
        </div>
    </section>
  )
}

export default Talants