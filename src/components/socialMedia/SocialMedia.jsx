import React from "react";
import { github, gitlab, linkedin } from "./imports";
import "./socialMedia.css";

const SocialMedia = () => {
  return (
    <div className="portfolio__brand section__padding">
      <div>
        <a href="https://www.facebook.com/ann.bolbot">
          <img src={github} />
        </a>
      </div>
      <div>
        <a href="https://gitlab.com/ausanli">
          <img src={gitlab} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/anna-usanli-b68772179/">
          <img src={linkedin} />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
