import React, { useState } from "react";
import Select from "react-select";
import "./AddLanguage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cancel from "../../../../../assets/images/Resume/cancel.png";
import { languages } from "reduxToolkit/extraReducers";

const AddLanguage = ({ setActiveModal }) => {
  const languageList = useSelector((state) => state.resume.languageList);
  const dispatch = useDispatch();
  let singleLang = true;

  useEffect(() => {
    dispatch(languages());
  }, []);

  let level = [
    { value: "A1 - Beginner", label: "A1 - Beginner" },
    { value: "A2 - Elementary", label: "A2 - Elementary" },
    { value: "B1 - Intermediate", label: "B1 - Intermediate" },
    { value: "B2 - Upper-Intermediate", label: "B2 - Upper-Intermediate" },
  ];

  const [data, setData] = useState([{ LanguageId: null, lavel: {} }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const removeLang = (id) => {
    let newLang = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== id) {
        newLang.push(data[i]);
      }
    }
    data(newLang);
  };

  return (
    <div>
      <div className="languageCard">
        <h2>Write what languages you speak</h2>
        <p>
          The more languages ​​you know, <br /> the more foreign employers will
          contact you.
        </p>
        <form method="PATCH" className="languageForm" onSubmit={handleSubmit}>
          <label htmlFor="laguages">Language*</label>
          {data.map((lang) => (
            <div className="select" style={{ marginTop: "15px" }}>
              <Select
                className="languageSelect"
                options={languageList?.map((el) => ({
                  value: el.id,
                  label: el.name,
                }))}
                placeholder="Language*"
                styles={{ width: "300px" }}
              />
              <Select
                className="languageSelect"
                options={level}
                placeholder="Level*"
              />
              {!singleLang && (
                <div className="cancelLang" onClick={() => removeLang(lang.id)}>
                  <img src={cancel} alt="cancel" />
                </div>
              )}
            </div>
          ))}
          <div
            className="addLanguage"
            style={{ cursor: "pointer" }}
            onClick={""}
          >
            + Add Language
          </div>
          <div className="btn-group-addprofile">
            <button className="cancel_btn" onClick={() => setActiveModal(null)}>
              Cancel
            </button>
            <button className="save_btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLanguage;
