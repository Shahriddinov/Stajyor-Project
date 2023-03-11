import React from 'react'
import classes from './PostJob.module.scss'
import Title from './components/cards/PostTitleCard'
import Description from './components/cards/PostJobDescriptionCard'
import About from './components/cards/PostAbout'
import Terms from './components/cards/Terms'
import Review from './components/cards/Review'

const PostJob = () => {

    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <Review />
            </div>
        </div>
    )
}

export default PostJob