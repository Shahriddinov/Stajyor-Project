import React from 'react'
import classes from './Terms.module.scss'
import { GrFormClose, GrFormAdd } from 'react-icons/gr'
import { MdAdd, MdClose, MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Terms = () => {
  return (
    <>
            <div className={classes.title}>Terms</div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    How much do you wanna pay?
                </div>
                <div className={classes.pay}>
                    <input type="number" />
                    <select name="currency" id="">
                        <option value="usd">US Dollar</option>
                        <option value="uzs">Uzbek Sum</option>
                        <option value="rub">Russian Ruble</option>
                    </select>
                    <div className={classes.checkboxes}>
                        <div className={classes.checkbox}>
                            <input type="radio" name="term" id="" lassName={classes.check}/>
                            <label htmlFor="">Hourly</label>
                            <input type="radio" name="term" id="" className={classes.check}/>
                            <label htmlFor="">By project</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.input}>
                <div className={classes.inputTitle}>
                    Your deadline for the job
                </div>
                <div className={classes.pay}>
                    <input type="number" />
                    <select name="currency" id="">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                    </select>
                </div>
            </div>
            <div className={classes.button}>
                <button className={classes.backButton}>Back</button>
                <button className={classes.nextButton}>Next</button>
            </div>
        </>
  )
}

export default Terms