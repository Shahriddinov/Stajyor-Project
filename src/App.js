import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes,Navigate,} from "react-router-dom";
import Home from "pages/Home";
import Aboutus from "pages/NonAuth/Aboutus";
import Talants from "pages/NonAuth/pages/talants/Talants";
import Jobs from "pages/NonAuth/pages/jobs/Jobs";
import Signup from "pages/Sign/Signup/Signup";
import Login from "pages/Sign/Login/Login";
import NotFound from "pages/404";
import Header from "components/Layout/Header/Header";
import PageBackground from "pages/NonAuth/Background";
import Background from "pages/Resume/Background/Background";

function App() {

	const auth = useSelector(state => state.login.loggedIn)
	const len = useSelector(state => state.lenguage.lenguage)
	const resume = useSelector(state => state.login.resume)

	return(
		<BrowserRouter>
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
							<Route path="*" element={<Navigate to={`/${len}/company`}/>}/>
						</Routes>
					)
					:(
						<>
							<Header/>
							<Routes>
								<Route path= {`/${len}/about`} element={<Aboutus/>}/>
								<Route path={`/${len}/jobs`} element={<Jobs/>}/>
								<Route path={`/${len}/talants`} element={<Talants/>}/>
								<Route path={`/${len}/contact`} element={<Home/>}/>
								<Route path="*" element={<NotFound/>}/>
							</Routes>
						</>
					)
				}
			</div>
		</BrowserRouter>
	)
}

export default withRouter(App);
