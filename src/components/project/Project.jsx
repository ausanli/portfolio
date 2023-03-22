import React from 'react';
import './project.css';

const Project = ({ imgUrl, date, text, description, reference}) => {
  return (
    <div className="portfolio__project-container_article">
    <div className="portfolio__project-container_article-image">
      <img src={imgUrl} alt="project_image" />
    </div>
    <div className="portfolio__project-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <h5>{description}</h5>
      </div>
      <a href ={reference} target="_blank">Link to the site</a>
    </div>
  </div>
  )
}

export default Project