import Header from "components/Layout/Header/Header";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { deleteUserWithId } from "reduxToolkit/extraReducers";
import { changeRoleWhenFinished } from "reduxToolkit/loginSlice/LoginSlice";
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

  useEffect(() => {
    if (auth) {
      let decode = jwt_decode(auth);
      if (!freelancerOrCompony) {
        dispatch(
          changeRoleWhenFinished(
            Object.values(decode).includes("Company")
              ? "Company"
              : Object.values(decode).includes("Freelancer")
              ? "Freelancer"
              : null
          )
        );
      }
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
  var userBoolen = false
  const navigate = useNavigate();
  useEffect(() => {
    var resumeId = JSON.parse(localStorage.getItem("resumeId"));
    if (resumeId) {
      navigate(`/${len}/welcome/create-profile/${resumeId}`);
    }
    if(auth){
      let decode = jwt_decode(auth)
      if(decode){
        userBoolen = Object.values(decode)[1]
      }
    }
  }, [])

  const handleDelete = ()=>{
    if(userBoolen){
      console.log(userBoolen)
      localStorage.removeItem('token')
      dispatch(deleteUserWithId(userBoolen))
    }
    else{
      alert("error")
    }
  }
  return (
    <div className="App">
      <button style={{position:"absolute"}} onClick={handleDelete}>delete user Role</button>
      {freelancerOrCompony !== "Company" &&
      freelancerOrCompony !== "Freelancer" ? (
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
            <Route path="*" element={<Navigate to={`/${len}/login`} />} />
          </Routes>
        )
      ) : auth && freelancerOrCompony ? (
        <div
          className={`freelanser-box  ${
            pathname.slice(4) === "contact" || pathname.slice(4) === "about"
              ? "freelanser-box-bg1"
              : "freelanser-box-bg2"
          }`}
        >
          <Header />

          {freelancerOrCompony === "Freelancer" ? (
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
              <Route path="*" element={<Navigate to={`/${len}/jobs`} />} />
            </Routes>
          ) : null}

          {/* {freelancerOrCompony === "Company" && (
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
