import React from 'react'
import './Title.scss'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { activeDoteAction } from 'reduxToolkit/jobsSlice/JobsSlice'

function Title() {
  var dispatch = useDispatch()
  const datas = [
    {label:"Web designer", value:"Web designer"},
    {label:"Frontend", value:"Frontend"},
    {label:"Backend", value:"Backend"}
  ]
const handleClick = (e)=>{
  e.preventDefault()
  dispatch(
    activeDoteAction([
      { id: 2, label: "About the talant" },
      { id: 2, type: "Describe the job" }
    ])
  )
}
  return (
    <div className="title_main">
      <h2 style={{marginBottom:"10px"}}>Title</h2>
      <form onSubmit={handleClick}>
        <label>Name your job posting</label>
        <input placeholder="Enter name" type="text"/>
        <label>Category</label>
        <Select 
        className='selectOptions'
        options={datas}
        />
        <div className="buttons">
          <button>Next</button>
        </div>
      </form>
    </div>
  )
}

export default Title