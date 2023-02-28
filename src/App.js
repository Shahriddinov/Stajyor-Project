import React, {useLayoutEffect} from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate,useNavigate,useLocation} from "react-router-dom";
import Header from "components/Layout/Header/Header";
import { createProfileRoute, freelancerRouter, publicRoute } from "routes";

function App() {
	const auth = useSelector(state => state.login.loggedIn);
	const len = useSelector(state => state.lenguage.lenguage);
	const resume = useSelector(state => state.login.resume);
	const navigate = useNavigate();
	const {pathname} = useLocation()
	const user = "okdhvc"

	useLayoutEffect(() => {
		navigate(`/${len}/`)
	},[len])

	return(
		<div className="App">
			{
				!auth
					?(
						<Routes>
							{
								publicRoute.map(route => (
									<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
								))
							}
							<Route path="*" element={<Navigate to={`/${len}/`}/>}/>
						</Routes>
					)
					:
					!resume
						?(
							<Routes>
								{
									createProfileRoute.map(route => (
										<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
									))
								}
								<Route path="*" element={<Navigate to={`/${len}/create-profile`}/>}/>
							</Routes>
						)
						:(
							<div className={`freelanser-box  ${(pathname.slice(4) === "contact" || pathname.slice(4) === "about") ? "freelanser-box-bg1" : "freelanser-box-bg2"}`}>
								<Header/>
								{
									user !== "company"
										?
										<Routes>
											{
												freelancerRouter.map(route => (
													<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
												))
											}
											<Route path={pathname.slice(0,4) } element={<Navigate to={`/${len}/jobs`}/>}/>
											<Route path={`${pathname.slice(0,4)}/login` } element={<Navigate to={`/${len}/jobs`}/>}/>
											<Route path={`/${len}/resume-finish/:resumeId`} element={<Navigate to={`/${len}/jobs`}/>}/>
										</Routes>
										:
										<Routes>
											{
												freelancerRouter.slice(0,4).map(route => (
													<Route path={`/${len}${route.path}`} element={route.element} key={route.id}/>
												))
											}
											<Route path={pathname.slice(0,4) } element={<Navigate to={`/${len}/talants`}/>}/>
										</Routes>
								}
							</div>
						)
			}
		</div>
	)
}

export default App;