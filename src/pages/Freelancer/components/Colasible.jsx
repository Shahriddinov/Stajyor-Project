import React from 'react';
import './Colasible.scss'
import arrow from '../../../assets/images/header/down_arrow.svg'
import { useState } from 'react';
const Colasible = ({text}) => {

    const [ anime, setAnime ] = useState(false)
    console.log(text);

    return (
      <div>
  <div className={`colasible ${anime? 'colasible1' : null}`} >
            

            <p className="colasible_info">
              {text}
            </p>
            <div onClick={()=> setAnime(!anime)} className='colasible_wrapper' >
                <img    src={arrow} alt=""/>
            </div>
        </div>
      </div>

    );
};

export default Colasible;