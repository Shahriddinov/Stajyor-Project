import Header from "components/Layout/Header/Header";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  createCompany,
  createProfileRoute,
  freelancerResume,
  freelancerRouter,
  publicRoute,
} from "routes";

function App() {
  const auth = useSelector((state) => state.login.loggedIn);
  const len = useSelector((state) => state.lenguage.lenguage);
  const freelancerOrCompony = useSelector(
    (state) => state.login.freelancerOrCompony
  );
  const loginOnSuccess = useSelector((state) => state.login.loginOnSuccess);
  const contactsIsSuccess = useSelector(
    (state) => state.companyRegister.contactsIsSuccess
  );
  const { skillsData, freelancerData } = useSelector(
    (state) => state.frilanserCardSlice
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const freelancer = localStorage.getItem("isResume")
    ? localStorage.getItem("isResume")
    : "welcome";
   let userRole = 1
   userRole = JSON.parse(localStorage.getItem("userRole"));
  let freelanceOrCompany;

  useEffect(() => {
    if (auth) {
      let decode = jwt_decode(auth);
      if (freelancerData && !userRole) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        freelanceOrCompany = Object.values(decode).includes("Company")
          ? "Company"
          : (freelanceOrCompany = Object.values(decode).includes("Freelancer")
              ? "Freelancer"
              : "None");
      }
    } else {
    }
  }, [auth]);

  // useLayoutEffect(() => {
  // 	navigate(`/${len}/`)
  // }, [len, navigate])

  // useEffect(
  // 	() => {
  // 		dispatch(claimsGet());
  // 	},
  // 	[dispatch]
  // );

  // useEffect(() => {
  // 	if (loginOnSuccess || contactsIsSuccess) {
  // 		dispatch(userRoles())
  // 	}
  // }, [loginOnSuccess, contactsIsSuccess, dispatch])

  return (
    <div className="App">
      {freelanceOrCompany === "None" || userRole === 0 ? (
        freelancer === "freelancer" ? (
          <Routes>
            {freelancerResume.map((route) => (
              <Route
                path={`/${len}${route.path}`}
                element={route.element}
                key={route.id}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={`/${len}/welcome/create-profile`} />}
            />
          </Routes>
        ) : freelancer === "company" ? (
          <Routes>
            {createCompany.map((route) => (
              <Route
                path={`/${len}${route.path}`}
                element={route.element}
                key={route.id}
              />
            ))}
            <Route
              path="*"
              element={<Navigate to={`/${len}/welcome/register-company`} />}
            />
          </Routes>
        ) : (
          <Routes>
            {createProfileRoute.map((route) => (
              <Route
                path={`/${len}${route.path}`}
                element={route.element}
                key={route.id}
              />
            ))}
            <Route path="*" element={<Navigate to={`/${len}/welcome`} />} />
          </Routes>
        )
      ) : auth && !userRole === 0 ? (
        <div
          className={`freelanser-box  ${
            pathname.slice(4) === "contact" || pathname.slice(4) === "about"
              ? "freelanser-box-bg1"
              : "freelanser-box-bg2"
          }`}
        >
          <Header />

          {userRole === 1 && (
            <Routes>
              {freelancerRouter.map((route) => (
                <Route
                  path={`/${len}${route.path}`}
                  element={route.element}
                  key={route.id}
                />
              ))}
              <Route
                path={pathname.slice(0, 4)}
                element={<Navigate to={`/${len}/jobs`} />}
              />
              <Route
                path={`/${len}/login`}
                element={<Navigate to={`/${len}/about`} />}
              />
              <Route
                path={`/${len}/welcome`}
                element={<Navigate to={`/${len}/jobs`} />}
              />
              <Route
                path={`/${len}/welcome/create-profile/:resumeId`}
                element={<Navigate to={`/${len}/jobs`} />}
              />
            </Routes>
          )}

          {/* {userRole === 2 && (
            <Routes>
              {freelancerRouter.slice(0, 4).map((route) => (
                <Route
                  path={`/${len}${route.path}`}
                  element={route.element}
                  key={route.id}
                />
              ))}
              <Route
                path={pathname.slice(0, 4)}
                element={<Navigate to={`/${len}/talants`} />}
              />
              <Route
                path={`/${len}/login`}
                element={<Navigate to={`/${len}/talants`} />}
              />
              <Route
                path={`/${len}/welcome`}
                element={<Navigate to={`/${len}/talants`} />}
              />
              <Route
                path={`/${len}/welcome/create-profile/:resumeId`}
                element={<Navigate to={`/${len}/talants`} />}
              />
            </Routes>
          )} */}
        </div>
      ) : (
        <Routes>
          {publicRoute.map((route) => (
            <Route
              path={`/${len}${route.path}`}
              element={route.element}
              key={route.id}
            />
          ))}
          <Route path="*" element={<Navigate to={`/${len}/welcome`} />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
