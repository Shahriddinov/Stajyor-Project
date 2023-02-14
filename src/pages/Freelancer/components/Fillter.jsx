import React  from 'react'
import { ReactComponent as Arrow } from '../../../assets/images/Freelancer/filter_arrow.svg'
import './Fillter.scss';

// import "bootstrap/dist/css/bootstrap.min.css"

const Fillter = () => {
  

  return (
      <form method='POST' className='filter'>
            <h2 className="filter_title"> Filter </h2>
            <h3 className="filter_text"> Payment amount </h3>
            <div className="filter_from">
                  <div className="filter_from_left">
                        <h3>From</h3>
                        <input type="number" placeholder='10$' min="0"  />
                  </div>
                  <div className="filter_from_right">
                        <h3>To</h3>
                        <input type="number" placeholder='20$' min="0"  />
                  </div>
            </div>
            <h3 className="filter_text"> Payment amount </h3>
            <input type="number" className="filter_job_success" placeholder='More than 80%' />
            <h3 className="filter_text">Required level </h3>

             <div className="filter_from">
                  <div className="filter_from_left">
                        <h3>From</h3>
                       <div className='filter_from_main' >
                         <select>
                              <option value="junior">Junior</option>
                              <option value="middle">Middle</option>
                              <option value="senior">Senior</option>
                              <option value="team_lead">Team Lead</option>
                        </select>
                              <Arrow />
                       </div>
                  </div>
                  <div className="filter_from_right">
                        <h3>To</h3>
                     <div className='filter_from_main'>
                           <select>
                              <option value="junior">Junior</option>
                              <option value="middle">Middle</option>
                              <option value="senior">Senior</option>
                              <option value="team_lead">Team Lead</option>
                        </select>
                              <Arrow />
                     </div>
                  </div>

            </div>
                  <div className="filter_verify">
                        <input type="checkbox" />
                        <h3 className='filter_verify_text' style={{ 'font-size':'16px' }} >Verified employee</h3>
                  </div>
            <h3 className="filter_text" >Region</h3>   
                  <h1>select &times; </h1>
            <h3 className="filter_text">Completed jobs (minimum)</h3>
            <input type="number" className="filter_job_success" placeholder='10' />

            <h3 className='filter_text' >Required Skills</h3>
            <h1>select &times; </h1>
      </form>
            
  )
}

export default Fillter;