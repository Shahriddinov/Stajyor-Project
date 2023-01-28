import React , { useState } from 'react'
import './Filter.scss';
import Form from 'react-bootstrap/Form';
import { MultiSelect } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';

function Filter() {
      const [active, setActive] = useState(false);
      const handleClick = () => {
        setActive(!active);
      };
  return (
     <div className='Filter'>
     <p className='name'>Filter</p>
     {/* Payment amount */}
     <div className='Payment'>
           <p className='Payment_amount'>Payment amount</p>
     <div className='Form'>
           <p>From</p>
           <p>To</p>
     </div>
         <div className='Input'>
            <input type="text" placeholder='10$' />
            <input type="text" placeholder='20$' />
         </div>
     </div>
     {/* Job success */}
     <div className='Payment'>
           <p className='Payment_amount'>Job success</p>
           <div className='Input'>
                 <input className='More' type="text" placeholder='More than 80%' />
           </div>
     </div>
     {/* Required level */}
     <div className='Payment'>
           <p className='Payment_amount'>Required level</p>
           <div className='Form'>
                 <p>From</p>
                 <p>To</p>
           </div>
     <div className='Input'>
           <Form.Select className='select' aria-label="Default select example">
                 <option>Junior</option>
                 <option value="1">Middle</option>
                 <option value="2">Senior</option>
           </Form.Select>
           <Form.Select className='select' aria-label="Default select example">
                 <option>Middle</option>
                 <option value="1">Junior</option>
                 <option value="2">Senior</option>
           </Form.Select>
     </div>
           <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" for="flexCheckDefault">Verified employee</label>
           </div>
     </div>
     {/* Region */}
     <div className='Payment'>
           <p className='Payment_amount'>Region</p>
     <div> 
           <MultiSelect
           data={['Uzbekiston', 'Russia', 'USA', 'Kanada', 'Liviya', 'Latviya', 'Germaniya']}
           rightSection={<ChevronDown size={20} />}
           size='54'
           fz={20}
           radius={8}
          
         />
     </div>
     </div>
     {/* Completed jobs (minimum) */}
     <div className='Payment'>
            <p className='Payment_amount'>Completed jobs (minimum)</p>
            <input className='Input_Region' type="text" placeholder='10' />
     </div>
     {/* Required skills */}
     <div className='Payment'>
            <p className='Payment_amount'>Required skills</p>
     <div>
           <MultiSelect
           data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
           rightSection={<ChevronDown size={20} />}
           size='54'
           radius={8}
           fz={20}
         />
     </div>
            <button type="button" onClick={handleClick} className='btn-outline-primary'>{ active ?  "Reset filter" : "Apply filter" }</button>
     </div>
   </div>
   
  )
}

export default Filter