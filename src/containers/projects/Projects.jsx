import React from "react";
import {
  collaby,
  cookingReactions,
  giphy,
  aimGame,
  miniAnimation,
} from "./imports";
import { Project } from "../../components";
import "./projects.css";

const Projects = () => {
  return (
    <div className="portfolio__project section__padding" id="projects">
      <div className="portfolio__project-heading">
        <h1 className="gradient__text">My Projects</h1>
      </div>
      <div className="portfolio__project-container">
        <div className="portfolio__project-container_groupA">
          <Project
            imgUrl={collaby}
            date="August, 2022"
            text="The Collaby app is a real-time solution for communication and collaboration."
            description="It is a modern solution for people and teams that allows users to share messages and images, collaborating in teams and channels."
            reference="https://collaby-3e125.web.app/"
          />
        </div>
        <div className="portfolio__project-container_groupB">
          <Project
            imgUrl={cookingReactions}
            date="July, 2022"
            text="Cooking Reactions is an interactive Forum System."
            description="Allows the users to register, create recipes, add comments, rate the recipes that they like or dislike the most."
            reference="https://gitlab.com/te3433/web-project-2.git"
          />
          <Project
            imgUrl={giphy}
            date="July, 2022"
            text="Giphy is a vast collection of animated GIFs."
            description="Provides functionality for searching and uploading GIFs. The application displays the top trending GIFs, each GIF details, all uploaded GIFs, and favorite GIFs."
            reference="https://gitlab.com/Plamen_Iliev_A37/web-project1.git"
          />
          <Project
            imgUrl={aimGame}
            date="November, 2022"
            text="Mini-Aim-Game"
            reference="https://gitlab.com/ausanli/cards-gallery.git"
          />
          <Project
            imgUrl={miniAnimation}
            date="November, 2022"
            text="Stunning Animation"
            reference="https://gitlab.com/ausanli/cards-gallery.git"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
