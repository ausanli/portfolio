import React from "react";
import photo from "../../assets/photo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="portfolio__header section__padding" id="about">
      <div className="portfolio__header-content">
        <h1 className="gradient__text">Hello,</h1>
        <h1 className="gradient__text">I&apos;m Anna</h1>
        <h2 className="gradient__text">
          Welcome to my responsive design page!
        </h2>
        <p>
          I&apos;m a React Front-End developer with over a year of professional
          experience, currently engaged in a project for the Italian Ministry.
          <p>
            On a daily basis, my role involves implementing new features, with
            an emphasis on enhancing component reusability and accessibility
            while ensuring the technical feasibility of UI/UX designs for mobile
            devices. I collaborate closely with cross-functional teams,
            integrating front-end elements with server-side logic and
            functionalities. Additionally, I'm responsible for diagnosing and
            rectifying bugs, and I undertake code refactoring as needed to
            enhance functionality and performance.
            <p>
              Recently, I further honed my skills by completing a React Upskill
              course offered by Telerik Academy. This additional training has
              enriched both my technical and soft skills, as I had the
              opportunity to collaborate with seasoned professionals during my
              coursework experiences.
            </p>
          </p>
        </p>
      </div>
      <div className="portfolio__header-image">
        <img src={photo} />
      </div>
    </div>
  );
};

export default Header;
