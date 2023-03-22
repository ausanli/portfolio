import React from "react";
import { Feature } from "../../components";
import "./courses.css";

const coursesData = [
  {
    title: "Alpha JavaScript Track, Telerik Academy (2022)",
    text: "JavaScript • OOP • Data Structures & Algorithms • React",
  },
  {
    title: "Java Corporate Training, Software University (2023)",
    text: "Java Advanced • Java OOP",
  },
];

const Courses = () => {
  return (
    <div className="portfolio__features section__padding" id="courses">
      <div className="portfolio__features-heading">
        <h1 className="gradient__text">Courses & Certificates</h1>
        <p>
          It is only by continuously learning and expanding our knowledge that
          we can truly reach our full potential.
        </p>
      </div>
      <div className="portfolio__features-container">
        {coursesData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
