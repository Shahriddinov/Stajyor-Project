import React from 'react'
import classes from './PostAbout.module.scss'
import { GrFormClose, GrFormAdd } from 'react-icons/gr'
import { MdAdd, MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const PostAbout = () => {
  return (
    <>
            <div className={classes.title}>About the talant</div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    What level of experience should your freelancer have?
                </div>
                <div className={classes.levels}>
                    <div className={classes.level}>
                        Junior
                    </div>
                    <div className={classes.level}>
                        Middle
                    </div>
                    <div className={classes.level}>
                        Senior
                    </div>
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Enter skills needed (optional)
                </div>
                <div className={classes.skillsAdded}>
                    <div className={classes.skill}>
                        Figma <MdClose color='white'/>
                    </div>
                </div>
                <div className={classes.skills}>
                    <div className={classes.skill}>
                            <MdAdd /> Adobe Photoshop
                    </div>
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    The language a freelancer should know (optional) (optional)
                </div>
                <div className={classes.langAdded}>
                    <div className={classes.languages}>
                        <div className={classes.lang}>
                            English <MdClose color='white'/>
                        </div>
                    </div>
                    <div className={classes.dropdown}><MdOutlineKeyboardArrowDown size={18}/></div>
                </div>
            </div>
            <div className={classes.button}>
                <button className={classes.backButton}>Back</button>
                <button className={classes.nextButton}>Next</button>
            </div>
        </>
  )
}

export default PostAbout