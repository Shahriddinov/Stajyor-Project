import React from 'react'
import { useDispatch } from 'react-redux'
import { activeDoteAction } from 'reduxToolkit/jobsSlice/JobsSlice'

function Terms() {
  var dispatch = useDispatch()

  const backPage = (e)=>{
    dispatch(
      activeDoteAction([
        { id: 3, label: "About the talant" },
        { id: 3, type: "About" }
      ])
    )
  }
  return (
    <div>
      <button onClick={backPage}>Back</button>
    </div>
  )
}

export default Terms
