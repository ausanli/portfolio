import React from "react";
import "./Education.css";
import mortarboard from "../../assets/mortarboard.png";
import Feature from "../../components/feature/Feature";

const Education = () => {
  return (
    <div className="portfolio__education section__margin" id="education">
      <div className="portfolio__education-feature">
        <Feature
          title="My Education"
          text="Education is the key that unlocks the doors of opportunity and empowers us to chase our dreams."
        />
        <div className="portfolio__education-image">
          <img src={mortarboard} />
        </div>
      </div>
      <div className="portfolio__education-heading">
        <h1 className="gradient__text">
          The possibilities are beyond our imagination
        </h1>
      </div>
      <div className="portfolio__education-container">
        <Feature
          title="Masters of Business Management "
          text="ESFAM-AUF, Bulgaria/France"
        />
        <Feature
          title="Bachelor of English/French Philology"
          text="St. Cyril and St. Methodius University of Veliko Tarnovo, Bulgaria"
        />
      </div>
    </div>
  );
};

export default Education;
