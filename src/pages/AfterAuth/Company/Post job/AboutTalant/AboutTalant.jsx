import React from 'react'
import { useDispatch } from 'react-redux';
import '../DescribeJob/DescribeJob.scss'
import { activeDoteAction } from 'reduxToolkit/jobsSlice/JobsSlice';
function AboutTalant() {
  var dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault();
     dispatch(
       activeDoteAction([
         { id: 4, label: "Terms" },
         { id: 4, type: "Terms" }
       ])
     )
    }
  const backPage = (e)=>{
    e.preventDefault();
    dispatch(
      activeDoteAction([
        {id:2, label:"Describe the job"},
        {id:2, type:"Describe"}
      ])
      ) 
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div className="buttons">
        <button className='backBtn' onClick={backPage}>Back</button>
        <button className='nextBtn' type='submit'>Next</button>
      </div>
      </form>
    </div>
  )
}

export default AboutTalant
