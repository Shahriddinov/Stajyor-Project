import React from 'react';
import './LangDrop.scss'
import arrow_down from '../../../../assets/images/header/down_arrow.svg'
const LangDrop = () => {


  const path = window.location.pathname.split('/')[2]
  console.log(path, 'asdasadasd');

    return (
<div className="dropdown1">
  <button className="dropbtn1">
    <h4 className='dropdown_title1' >En</h4>
    <img src={arrow_down} className='header_arrow_img' alt="arrow photos" />
    
    </button>
  <div className="dropdown-content1">
    <a href={`en/${path}`} >En</a>
    <a href={`ru/${path}`} >Ru</a>
    <a href={`uz/${path}`} >Uz</a>
  </div>
</div>
    );
};

export default LangDrop;