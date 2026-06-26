import "./styles.scss";
import React, { useEffect } from "react";
import { initializeAOS } from "../../../../Utils/commonMethods";

const VenueSection = ({ language, translations }) => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <section>
      <div
        className="venue-section-container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h1
          className={`venue-heading ${
            language === "kannada" ? "kannada-heading" : ""
          }`}
        >
          {translations[language].venueTitle}
        </h1>
        <p className="gratitude-message">
          {translations[language].welcomeMessage}
        </p>
        <div className="map-container">
          <p>
            {translations[language].marriageLocation}{" "}
            <i className="pi pi-map-marker location-icon"></i>
          </p>
          <div className="map-venue">
            <iframe
              title="Map location of Y S R Kalyana Mantapa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3893.3319690330136!2d76.0470029!3d12.6262137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba512844fb289b7%3A0x4d8220252c4025c0!2sYSR%20Convention%20Hall!5e0!3m2!1sen!2sin!4v1782463393350!5m2!1sen!2sin"
              allowfullscreen={true}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map-frame"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
