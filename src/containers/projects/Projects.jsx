import React from "react";
import { collaby, VRScans, bookingApp, aimGame, miniAnimation } from "./imports";
import { Project } from "../../components";
import "./projects.css";

const Projects = () => {
  return (
    <div className="portfolio__project section__padding" id="projects">
      <div className="portfolio__project-heading">
        <h1 className="gradient__text">Some of My Projects</h1>
      </div>
      <div className="portfolio__project-container">
        <div className="portfolio__project-container_groupA">
          <Project
            imgUrl={VRScans}
            date="January, 2024"
            text="VRScans Lazy-loading library"
            description="Displays materials from a pre-defined REST API. It provides a mobile-friendly interface with filters, search functionality, and lazy-loading of materials. Additionally, it has integrated Auth0 Provider for user profile management,  and shopping cart functionality with Stripe integration in test mode for checkout."
            reference="https://lazy-loading-vrscans-library-lazy-loading-vrscan-a6a3ff98f69cef.gitlab.io/"
          />
        </div>
        <div className="portfolio__project-container_groupB">
          <Project
            imgUrl={collaby}
            date="August, 2022"
            text="The Collaby app is a real-time solution for communication and collaboration."
            description="It is a modern solution for people and teams that allows users to share messages and images, collaborating in teams and channels."
            reference="https://collaby-3e125.web.app/"
          />

          <Project
            imgUrl={bookingApp}
            date="March, 2023"
            text="Reservio - SPA booking app"
            description="Where users can see all places, book a specific place, register, create and update places."
            reference="https://gitlab.com/ausanli/booking-app"
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
