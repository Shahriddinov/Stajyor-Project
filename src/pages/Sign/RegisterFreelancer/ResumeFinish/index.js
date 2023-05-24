import { useEffect } from "react";
import classes from "./resume-finish.module.scss";
import "./ComplateResume.scss";
import arrowLeft from "../../../../assets/images/arrow-left.svg";
import logo from "../../../../assets/images/Logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  resumeSelect,
  resumeFinishPost,
  getFreelancer,
  experienceGet,
  educationGet,
} from "reduxToolkit/extraReducers";
import Resume1 from "./complate-resume/resume-list/Resume1";
import Resume2 from "./complate-resume/resume-list/Resume2";
import Resume3 from "./complate-resume/resume-list/Resume3";
import Resume4 from "./complate-resume/resume-list/Resume4";
import Resume5 from "./complate-resume/resume-list/Resume5";
import Resume6 from "./complate-resume/resume-list/Resume6";
import { activeDoteAction } from "reduxToolkit/resumeControlsSlice/resumeControls";
import { changeRoleWhenFinished } from "reduxToolkit/loginSlice/LoginSlice";

const ReumeFinish = () => {
  // const resumeDetails = useSelector(state => state.resume.resumeDetails)
  const { ...freelancer } = useSelector(
    (state) => state.frilanserCardSlice.freelancer
  );
  const { freelancerLoading } = useSelector((state) => state.resume);
  const loading = useSelector((state) => state.resume.loading);
  const experiences = useSelector((state) => state.resume.experienceList);
  const { skillsData, freelancerData } = useSelector(
    (state) => state.frilanserCardSlice
  );

  const hobbiesData = useSelector(
    (state) => state.frilanserCardSlice.hobbiesData
  );
  const resumeOnSuccess = useSelector((state) => state.login.resumeOnSuccess);
  const educationList = useSelector((state) => state.resume.educationList);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { resumeId } = useParams();

  useEffect(() => {
    dispatch(experienceGet());
    dispatch(educationGet());
  }, []);

  const data = new FormData();
  data.append("resume", resumeId);

  useEffect(() => {
    if (resumeOnSuccess) {
      dispatch(
        activeDoteAction([
          { id: 1, label: "Personal information" },
          { id: 1, label: "photo" },
        ])
      );
    }
  }, [resumeOnSuccess]);
  useEffect(() => {
    if (!freelancerLoading) {
      let id = localStorage.getItem("freelancerId");
      dispatch(getFreelancer(id));
    }
  }, [freelancerLoading]);

  const routes = [
    {
      id: 1,
      resumeId: 1,
      element: (
        <Resume1
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
    {
      id: 2,
      resumeId: 2,
      element: (
        <Resume2
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
    {
      id: 3,
      resumeId: 3,
      element: (
        <Resume3
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
    {
      id: 4,
      resumeId: 4,
      element: (
        <Resume4
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
    {
      id: 6,
      resumeId: 6,
      element: (
        <Resume5
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
    {
      id: 5,
      resumeId: 5,
      element: (
        <Resume6
          freelancerHobbies={hobbiesData}
          {...freelancerData}
          freelancerPosition={skillsData}
          experiences={experiences}
          educations={educationList}
        />
      ),
    },
  ];

  const handleSubmit = () => {
    localStorage.setItem(
      "userRole",
      JSON.stringify(freelancerData?.user?.role)
    );
    localStorage.removeItem("isResume");
    navigate("/");
    localStorage.setItem("type", "Freelancer");
    dispatch(changeRoleWhenFinished("Freelancer"));
  };

  const handleClick = () => {
    localStorage.removeItem('resumeId')
    dispatch(
      activeDoteAction([
        { id: 1, label: "Personal information" },
        { id: 1, label: "photo" },
      ])
    );
  };

  return (
    <>
      {loading && freelancerLoading ? (
        <p>lading...</p>
      ) : (
        <div className={classes.resume__finish}>
          <div className={classes.resume__finish_container}>
            <div className={classes.resume__finish_inner}>
              <div className={classes.resume__finish_header}>
                <div className={classes.resume__finish_logo}>
                  <a className={classes.logo} href="/">
                    <img src={logo} alt="NAPA automotive" />
                  </a>
                </div>
                <button
                  className={classes.resume__finish_back}
                  onClick={handleClick}
                >
                  <img src={arrowLeft} alt="Arrov left" />
                  <span >Back</span>
                </button>
              </div>
              <div className={classes.resume__finish_main}>
                <h3 className={classes.resume__finish_title}>
                  Your Resume is Done!
                </h3>
                <div className={classes.resume__finish_box}>
                  <ul className={classes.resume}>
                    {routes.map(
                      (el) =>
                        el.resumeId === resumeId * 1 && (
                          <li key={el.id}>{el.element}</li>
                        )
                    )}
                  </ul>
                  <div className={classes.finish__box}>
                    <button className={classes.finish} onClick={handleSubmit}>
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReumeFinish;