import React from 'react'
import './Contact.scss'
import Header from '../../../components/Layout/Header/HeaderBlue'
import Logo from '../../../assets/images/Freelancer/logos_telegram.svg'
import App from '../../../assets/images/Freelancer/whatsapp.svg'
function Contact() {
  return (
    <div>
         <Header />
         <div className='Contact'>
         <div className='Network'>
          <div className='Telegram'>
            <img src={Logo} alt="" />
            <p className='Go_Telegram'>Go to Telegram</p>
          </div>
          <div className='Telegram'>
          <img src={App} alt="" />
            <p className='Go_Telegram'>Go to Whats app</p>
          </div>
         </div>
         <div className='Login'>
          <p className='Contact_us'>Contact us</p>
          <p className='Text'>Fill in the blank and we will contact you</p>
          <input className='Email' placeholder='Name' type="text" />
          <input className='Email' placeholder='E-mail' type="text" />
          <input className='Email' placeholder='+998 99 999 99 99' type="text" />
          <textarea className='Textarea' placeholder='Text message'></textarea>
          <button className='Send'>Send</button>
         </div>
        </div>
    </div>
  )
}

export default Contact