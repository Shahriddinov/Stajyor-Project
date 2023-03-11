import React from 'react'
import classes from './review.module.scss'

const Review = () => {
  return (
    <>
            <div className={classes.title}>Review and post</div>
            <div className={classes.summary}>
                <div className={classes.section}>
                    <h3>Title</h3>
                    <div className={classes.subtitle}>
                        <p>Name of your job</p>
                        <p>Business Card Design</p>
                    </div>
                    <div className={classes.subtitle}>
                        <p>Category</p>
                        <p>Design and art</p>
                    </div>
                </div>
                <div className={classes.horizontalLine}></div>
                <div className={classes.section}>
                    <h3>Description</h3>
                    <div className={classes.subtitle}>
                        <p>Description</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, amet praesentium molestiae blanditiis harum ab labore repellendus non illum autem quae minima, excepturi id natus dignissimos facilis quidem dolorem odit!</p>
                    </div>
                </div>
                <div className={classes.horizontalLine}></div>
                <div className={classes.section}>
                    <h3>Freelancer</h3>
                    <div className={classes.subtitle}>
                        <p>Level</p>
                        <p>Middle</p>
                    </div>
                    <div className={classes.subtitle}>
                        <p>Skills</p>
                        <p>Adobe Photoshop, Figma, Adobe Illustration</p>
                    </div>
                    <div className={classes.subtitle}>
                        <p>Languages</p>
                        <p>English, Russian</p>
                    </div>
                </div>
                <div className={classes.horizontalLine}></div>
                <div className={classes.section}>
                    <h3>Payment</h3>
                    <div className={classes.subtitle}>
                        <p>Offered rate</p>
                        <p>$10/hour</p>
                    </div>
                    <div className={classes.subtitle}>
                        <p>Deadline</p>
                        <p>10 days</p>
                    </div>
                </div>
            </div>
            <div className={classes.button}>
                <button className={classes.backButton}>Edit</button>
                <button className={classes.nextButton}>Post</button>
            </div>
        </>
  )
}

export default Review