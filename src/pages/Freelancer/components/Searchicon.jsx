import React from 'react'
import './Freelancer.scss';
import { Search } from 'tabler-icons-react';
function Searchicon() {
  return (
    <div>
        <div className='Freelancer'>
      {/* Search */}
    <div>
          <input className='Input' type="text"  placeholder='Title, keywords...'/>
          <button className='Search_icon' >
            <Search size={30} strokeWidth={2} color={'white'} />
          </button>
    </div>
    {/* Search */}
    </div>
    </div>
  )
}

export default Searchicon