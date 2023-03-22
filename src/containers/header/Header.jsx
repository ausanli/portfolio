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
          I&apos;m a Junior Front-End developer at DXC since December 2022.
          <p>
            I realized my interest in technologies when I worked as a B2B
            Technical Support assisting end users in resolving hardware and
            software issues.
            <p>
              Mostly I&apos;ve gained my programming skills during an intensive
              JavaScript academy at Telerik. I&apos;ve also strengthened my hard
              and soft skills having had experience in 3 group projects and some
              personal projects.
            </p>
            My interest in software development has increased and I continue to
            expand my knowledge every day.
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
