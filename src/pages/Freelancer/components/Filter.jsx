import React , { useState } from 'react'
import './Filter.scss';
import Form from 'react-bootstrap/Form';
import { MultiSelect } from '@mantine/core';
import { ChevronDown } from 'tabler-icons-react';

function Filter() {
      const [num, setNum] = useState('');
      const handleNumChange = event => {
            const limit = 4;
            setNum(event.target.value.slice(0, limit));
          };
          const [nums, setNums] = useState('');
          const handleNumChanges = event => {
            const limit = 7;
            setNums(event.target.value.slice(0, limit));
          };
          (() => {
            const forms = document.querySelectorAll('.needs-validation')
            Array.from(forms).forEach(form => {
              form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                  event.preventDefault()
                  event.stopPropagation()
                }
          
              })
            })
          })()
  return (
     <div className='Filter'>
      <form className=" needs-validation" novalidate>
     <p className='name'>Filter</p>
     {/* Payment amount */}
     <div className='Payment'>
           <p className='Payment_amount'>Payment amount</p>
     <div className='Form'>
           <p>From</p>
           <p>To</p>
     </div>
         <div className='Input'>
            <input type="number"
        name="num"
        value={num}
        onChange={handleNumChange} 
        placeholder='10$'
        id="validationTooltip01"  required
        />
            <input type="number"
        name="num"
        value={nums}
        onChange={handleNumChanges} 
        placeholder='20$'
        id="validationTooltip01"  required
        />
         </div>
     </div>
     {/* Job success */}
     <div className='Payment'>
           <p className='Payment_amount'>Job success</p>
           <div className='Input'>
           <input type="text" className="More" placeholder='More than 80%' id="validationTooltip01"  required/>
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
           maxDropdownHeight={100}
         />
     </div>
     </div>
     {/* Completed jobs (minimum) */}
     <div className='Payment'>
            <p className='Payment_amount'>Completed jobs (minimum)</p>
            <input className='Input_Region' type="text" placeholder='10' id="validationTooltip01"  required/>
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
           maxDropdownHeight={160}
         />
     </div>
            <button type="submit" className='btn-outline-primary'>Reset filter</button>
     </div>
     </form>
   </div>
   
  )
}

export default Filter