import "./styles.scss";
import React from "react";
import { Button } from "primereact/button";
import profileImage from "../../../../Assets/images/coupleProfilePhoto.png";

const HomeSection = ({ translations, language, handleTabClick }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-section-container">
      <div className="title-wrapper">
        <h1 className="wedding-title">
          {translations[language].brideGroomSectionTitle}
        </h1>
      </div>

      <p className="invite-message">{translations[language].welcomeTitle}</p>

      <div className="bride-groom-image-wrapper">
        <img
          src={profileImage}
          alt="Bride and Groom"
          className="bride-groom-image"
        />
      </div>
      <div className="bride-groom-names-wrapper">
        <h2 className="bride-groom-names">
          {translations[language].brideName}
        </h2>
        <i className="pi pi-heart-fill heart-icon"></i>
        <h2 className="bride-groom-names">
          {translations[language].groomName}
        </h2>

        <h3 className="wedding-date">{translations[language].weddingDate}</h3>
      </div>
      <div className="scroll-button-wrapper">
        <Button
          label={translations[language].saveTheDate}
          className="p-button-rounded scroll-button"
          onClick={() => handleTabClick("event")}
        />
      </div>

      <div className="scroll-button-container">
        <div className="mouse-icon">
          <div className="scroll-wheel"></div>
        </div>
        <button className="scroll-text" onClick={handleScroll}>
          {translations[language].scrollDownText}
        </button>
      </div>
    </div>
  );
};

export default HomeSection;
