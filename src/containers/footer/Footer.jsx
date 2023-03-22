import React from "react";
import portfolioLogo from "../../logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="portfolio__footer section__padding">
      <div className="portfolio__footer-heading">
        <h1 className="gradient__text">
          Perfection is not a destination. Enjoy the journey
        </h1>
      </div>

      <div className="portfolio__footer-btn">
        <div className="portfolio__footer-links_div">
          <h2>Get in touch</h2>
          <p>anna.bollbot@gmail.com</p>
          <p>+359 897277406</p>
          <p>Sofia, Bulgaria</p>
        </div>
      </div>

      <div className="portfolio__footer-links">
        <div className="portfolio__footer-links_logo">
          <img src={portfolioLogo} alt="portfolio_logo" />
          <p>Implemented with ReactJs</p>
        </div>
      </div>

      <div className="portfolio__footer-copyright">
        <p>@2023 Anna_Usanli_Portfolio.</p>
      </div>
    </div>
  );
};

export default Footer;
