import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './PostJob.scss'
import Title from "./Title/Title";
import DescribeJob from "./DescribeJob/DescribeJob";
import AboutTalant from "./AboutTalant/AboutTalant";
import Terms from "./Terms/Terms";
import Finish from "./Finish/Finish";
import CareerSlider from "pages/Sign/RegisterFreelancer/CareerSlider/CareerSlider";
import Round from "components/Round/Round";
import back from "../../../../assets/images/Resume/back.png";

function PostJob() {
  const { activeCard } = useSelector((state) => state.companyRegister);
  const len = useSelector((state) => state.lenguage.lenguage);
  const { activeDote } = useSelector((state) => state.jobs);

  const { t } = useTranslation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${len}/my-jobs`);
  };

  const dot = [
    { id: 1, label: "Title" },
    { id: 2, label: "Describe the job" },
    { id: 3, label: "About the talant" },
    { id: 4, label: "Terms" },
    { id: 5, label: "Review and post" },
  ];

  const cards = [
    { id: 1, label: <Title />, type: "Title" },
    { id: 2, label: <DescribeJob />, type: "Describe the job" },
    { id: 3, label: <AboutTalant />, type: "About the talant" },
    { id: 4, label: <Terms />, type: "Terms" },
    { id: 5, label: <Finish />, type: "Review and post" },
  ];
  return (
    <div>
      <div className="allBackground">
        <div className="container">
          <div className="allBackground_inner">
            <div className="backSign">
              <button onClick={handleClick} className="backSign_btn">
                <img src={back} alt="back sign" />
                {t("back")}
              </button>

              <div className="round">
                <Round />
              </div>
            </div>

            <div className="cards">
              {cards.map((el) => (
                <div
                  className={`$"card_box} ${
                    el.type === activeCard.type ? " active" : ""
                  }`}
                  key={el.id}
                  style={{
                    top:
                      el.id < activeCard.id
                        ? "-200%"
                        : el.id === activeCard.id
                        ? "12%"
                        : "200%",
                  }}
                >
                  {el.label}
                </div>
              ))}
            </div>

            <div className="career">
              <CareerSlider
                classNameLine="myCompany__line"
                dot={dot}
                activeDote={activeDote}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
