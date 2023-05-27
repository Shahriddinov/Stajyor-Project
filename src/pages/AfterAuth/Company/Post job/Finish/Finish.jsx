import React from "react";
import "./Finish.scss";
import project_file from "../../../../../assets/images/Company/project_file.png";
function Finish() {
  return (
    <div className="finish_main">
      <h2>Review and post</h2>
      <br />
      <div className="titles">
        <h3>Title</h3>

        <p>Name your job posting</p>
        <span>Business Card Design</span>

        <br />
        <div>
          <p>Category</p>
          <span>Design and art</span>
        </div>
        <br />
        <hr />
        <br />
        <h2 style={{ marginBottom: "8px" }}>Describe the job</h2>
        <p>Description</p>
        <span>
          Sit lacinia feugiat commodo hac tristique. Non lobortis in eu a,
          mattis ullamcorper nullam. Facilisi ipsum mattis hac urna scelerisque
          nunc id. Aliquam nullam turpis magna placerat. Amet aliquam eget
          dignissim odio leo, in adipiscing. Aliquet mattis in tortor, eros.
          <span className="description_span">
            site:<a>https://hipsdontlies.com/</a>
          </span>
        </span>
        <div className="aditional_projects">
          <p>Additional project files</p>
          <span>
            <img src={project_file} />
          </span>
          <p></p>
        </div>
        <hr />
        <br />
        <h3>About the talant</h3>
        <div className="select_levels">
          <p>Required level</p>
          <span>Junior</span>
        </div>
        <div className="select_skills">
          <p>Skills needed</p>
          <img src={project_file} />
          <img src={project_file} />
          <img src={project_file} />
        </div>
      </div>
    </div>
  );
}

export default Finish;
