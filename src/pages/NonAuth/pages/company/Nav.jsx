import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './Company.module.scss'
import classesNav from './Navigation.module.scss'
import { Link } from 'react-router-dom'
import Logo from './assets/logo.png'

const Nav = () => {

    const [count, setCount] = useState(0);
    const [clientJobs, setClientJobs] = useState('active')
    const len = useSelector(state => state.lenguage.lenguage)

	let step1 = false,
		step2 = false,
		step3 = false,
		step4 = false,
		step5 = false,
		step6 = false,
		step7 = false,
		step8 = false;
	switch (count) {
		case 1:
			step1 = true;
			break;
		case 2:
			step2 = true;
			break;
		case 3:
			step3 = true;
			break;
		case 4:
			step4 = true;
			break;
		case 5:
			step5 = true;
			break;
		case 6:
			step6 = true;
			break;

		case 7:
			step7 = true;
			break;

		case 8:
			step8 = true;
			break;

		default:
			step1 = true;
	}

    return (
        <div className={classes.background}>
            <div className={classesNav.menu}>
                <Link to={`/${len}/`}><img src={Logo} alt="" /></Link>
                <div className={classesNav.right__side}>
                    <ul className={classesNav.menu__links}>
                        <li className={step1 ? classesNav.active : classesNav.menu__link} onClick={() => setCount(1)}>
                            Home
                        </li>
                        <li className={step5 ? classesNav.active : classesNav.menu__link} onClick={() => setCount(5)}>
                            <Link to={`/${len}/talents`}>Talents</Link>
                        </li>
                        <li className={step6 ? classesNav.active : classesNav.menu__link} onClick={() => setCount(6)}>
                            Jobs
                        </li>
                        <li className={step7 ? classesNav.active : classesNav.menu__link} onClick={() => setCount(7)}>
                            About us
                        </li>
                        <li className={step8 ? classesNav.active : classesNav.menu__link} onClick={() => setCount(8)}>
                            Contact us
                        </li>
                    </ul>
                    <div className={classesNav.menu__buttons}>
                        <Link to="/login">
                            <button className={classesNav.menu__login}>Log in</button>
                        </Link>
                        <Link to="/signup">
                            <button className={classesNav.menu__signup}>Sign up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav