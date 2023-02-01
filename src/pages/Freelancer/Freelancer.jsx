import React, {useState, useEffect} from 'react';
import Round from 'pages/NonAuth/Round';
import Cart from './components/Cart';
import FreelancerModal from './components/FreelancerModal';
import './Freelancer.scss';
import Fillter from './components/Fillter'
import { useContext } from 'react';
import Context from 'components/Context/Context';


const Freelancer = () => {

    const { isActive } = useContext(Context)

    

    const [blackHeight, setBlackHeight] = useState(0);

    useEffect(() => {
        if(isActive){
        const freelancerWin = document.querySelector(".freelancermodal");
        const modal_height = freelancerWin.clientHeight;
        setBlackHeight(modal_height);
        }
    }, [isActive]);
    console.log(isActive);
    console.log(blackHeight , 'saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');


    return (
        <section className='freelancer' >
            
            {
                isActive ? <div className='black-window' style={{"height":blackHeight}} ></div>  : null
            }
            
            <div className="freelancer_container">
                
                <div className='freelancer_container_outline'></div>
                <Cart />
                <Cart />
                <Cart />
                <Cart />
    
                <div className='freelancer_container_round'>
                    <Round />
                </div>
                <Fillter />
                {
                    isActive ? <FreelancerModal /> : null
                }

     
            </div>
        </section>
    );
};

export default Freelancer;