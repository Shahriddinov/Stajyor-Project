import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import classes from './Company.module.scss'
import Circle from './assets/Ellipse 16.png'
import Nav from './Nav'
import CompanyInfo from './CompanyInfo'
import JobAd from './JobAd'

const Company = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <><div className={classes.circleBg}>
                <img src={Circle} alt="" />
        </div>
        <Nav />
        <Routes>
            <Route path='/company' element={<CompanyInfo />}/>
            <Route path='jobAd' element={<JobAd />}/>
        </Routes></>

)
}

export default Company