import React from 'react';
import './LangDrop.scss'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
const LangDrop = () => {
    return (
<div className="dropdown1">
  <button className="dropbtn1">
    <h4 className='dropdown_title1' >En</h4>
    <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />
    
    </button>
  <div className="dropdown-content1">
    <p >En</p>
    <p >Ru</p>
    <p >Uz</p>
  </div>
</div>
    );
};

export default LangDrop;