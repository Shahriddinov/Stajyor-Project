import React from 'react';
import './Carusel.scss'
import carusel_img from '../../../assets/images/Sign/carusell.png'
const Carusel = () => {
    return (
    <div className='body1'>
      <div className="carusel">
     <div className='carusel_items'>
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
     </div>
    </div>
    <div className="carusel2">
     <div className='carusel_item'>
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
       <img className='carusel_img' src={carusel_img} alt="" />
     </div>
    </div>
    </div>
  );
}



export default Carusel;