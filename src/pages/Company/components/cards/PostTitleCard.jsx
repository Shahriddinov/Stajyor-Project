import React from 'react'
import classes from './PostTitleCard.module.scss'

const PostTitleCard = () => {
  return (
    <>
        <div className={classes.title}>Title</div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Name your job posting
                </div>
                <input type="text" placeholder='Enter name'/>
            </div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Category
                </div>
                <select>
                    <option value="designAndArt">Design and art</option>
                    <option value="webDevelopment">Web development</option>
                </select>
            </div>
            <div className={classes.button}>
                <button>Next</button>
        </div>
    </>
  )
}

export default PostTitleCard