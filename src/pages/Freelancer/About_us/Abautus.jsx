import React from 'react'
import Header from '../../../components/Layout/Header/HeaderBlue'
import './About.scss'
import Rectange from '../../../assets/images/Freelancer/Rectangle 190.svg'
import Telegram from '../../../assets/images/Freelancer/telegram.svg'
import Instagram from '../../../assets/images/Freelancer/instagram.svg'
import Facebook from '../../../assets/images/Freelancer/facebook.svg'
import Start from '../../../assets/images/Freelancer/Start.svg'
function Abautus() {
  return (
    <div>
        <Header />
        <div className='About'>
             <img className='Rectange' src={Rectange} alt="" />
             <img className='Start' src={Start} alt="" />
             <span className='Lina'></span>
             <p className='About_us'>About us</p>
             <p className='Text'>Habitant mi varius consectetur eget. Neque, arcu, egestas pellentesque vitae vitae ut. Est malesuada consectetur quam netus sollicitudin tellus. Amet, euismod suspendisse cras tortor cursus at habitasse malesuada. Ut ac lectus arcu arcu, ultricies netus. 
              <br />
              <br />
              At maecenas metus pellentesque turpis egestas mattis neque. Tempor amet tortor phasellus hac quisque. Molestie sollicitudin lorem habitasse erat velit, donec elit habitant. Tortor pharetra, mattis ac mauris habitasse purus massa fusce mollis. Ullamcorper augue feugiat feugiat urna feugiat.
              <br />
              <br />
              Eu hendrerit tellus at felis, mi, imperdiet. Porta risus odio tortor, etiam. In.</p>
              <div className='Networks'>
              <img src={Telegram} alt="" />
              <img src={Instagram} alt="" />
              <img src={Facebook} alt="" />
              </div>
        </div>
    </div>
  )
}

export default Abautus