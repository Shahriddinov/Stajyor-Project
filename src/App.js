import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate,useNavigate,useLocation} from "react-router-dom";
import Home from "pages/Home";
import Aboutus from "pages/NonAuth/Aboutus";
import Talants from "pages/talants/Talants";
import Jobs from "pages/NonAuth/pages/jobs/Jobs";
import Signup from "pages/Sign/Signup/Signup";
import Login from "pages/Sign/Login/Login";
import NotFound from "pages/404";
import Header from "components/Layout/Header/Header";
import PageBackground from "pages/NonAuth/Background";
import Background from "pages/Resume/Background/Background";
import ResumeFinish from "pages/Resume/ResumeFinish";
import Contract from "pages/contract";
import Contactus from "pages/NonAuth/Contactus";
import Freelancer from "pages/Freelancer/Freelancer";
import Profile from "pages/FreelancerProfile/Profile";
import UserFreelancer from "pages/Freelancer/UserFreelancer";
import ChatModal from "pages/Chat/Modal";

function App() {
	const auth = useSelector(state => state.login.loggedIn);
	const len = useSelector(state => state.lenguage.lenguage);
	const resume = useSelector(state => state.login.resume);
	const navigate = useNavigate();
	const {pathname} = useLocation()

	useLayoutEffect(() => {
		navigate(`/${len}/`)
	},[len])

	const pathName = window.location.pathname;

	return(
		<div className="App">
			{
				!auth
				?(
					<Routes>
						<Route path={`/${len}/`} element={<PageBackground/>}/>
						<Route path={`/${len}/login`} element={<Login/>}/>
						<Route path={`/${len}/sign-up`} element={<Signup/>}/>
						<Route path="*" element={<Navigate to={`/${len}/`}/>}/>
					</Routes>
				)
				:
				!resume
				?(
					<Routes>
						<Route path={`/${len}/company`} element={<Login/>}/>
						<Route path={`/${len}/resume`} element={<Background/>}/>
						<Route path={`/${len}/resume-finish/:resumeId`} element={<ResumeFinish/>}/>
						<Route path="*" element={<Navigate to={`/${len}/company`}/>}/>
					</Routes>
				)
				:(
					<div className={`freelanser-box  ${(pathname.slice(4) === "contact" || pathname.slice(4) === "about") ? "freelanser-box-bg1" : "freelanser-box-bg2"}`}>
						<Header/>
						<Routes>
							<Route path={`/${len}/jobs`} element={<Freelancer/>}/>
							<Route path={`/${len}/talants`} element={<Talants/>}/>
							<Route path={`/${len}/profil`} element={<Profile/>}/>
							<Route path= {`/${len}/about`} element={<Talants/>}/>
							<Route path={`/${len}/contact`} element={<Talants/>}/> 
							<Route path={`/${len}/chat`} element={<ChatModal/>}/> 
							<Route path={`/${len}/contracts`} element={<Contract/>}/>
							<Route path={pathName.slice(0,4) } element={<Navigate to={`/${len}/jobs`}/>}/>
							<Route path={`/${len}/resume-finish/:resumeId`} element={<Navigate to={`/${len}/jobs`}/>}/>
							<Route path={`/${len}/freelancer-user`} element={<UserFreelancer/>}/>
							<Route path={`/${len}/*`} element={<NotFound/>}/>
						</Routes>
					</div>
				  )
			 }
		</div>
	)
}

export default App;
