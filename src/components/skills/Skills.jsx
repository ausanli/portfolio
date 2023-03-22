import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="portfolio__skills" id="skills">
      <div className="portfolio__skills-content">
        <div className="portfolio__skills_div">
          <h3>Technical Skills</h3>
          <ul className="portfolio__skills_list">
            <li className="portfolio__skills_list_item">JavaScript</li>
            <li className="portfolio__skills_list_item">ReactJS</li>
            <li className="portfolio__skills_list_item">HTML5</li>
            <li className="portfolio__skills_list_item">CSS</li>
            <li className="portfolio__skills_list_item">Git</li>
            <li className="portfolio__skills_list_item">Firebase</li>
            <li className="portfolio__skills_list_item">Bootstrap</li>
          </ul>
        </div>
        <div className="portfolio__skills_div">
          <h3>Soft Skills</h3>
          <ul className="portfolio__skills_list">
            <li className="portfolio__skills_list_item">Flexible</li>
            <li className="portfolio__skills_list_item">Fast Learner</li>
            <li className="portfolio__skills_list_item">Disciplined</li>
            <li className="portfolio__skills_list_item">Team player</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
