import "./styles.scss";
import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { initializeAOS } from "../../../../Utils/commonMethods";

const EventSection = ({ translations, language }) => {
  const [timerExpired, setTimerExpired] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    initializeAOS();
    calculateTimeRemaining();

    const interval = setInterval(() => {
      calculateTimeRemaining();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculateTimeRemaining = () => {
    const weddingDate = new Date("2026-07-02T00:00:00");
    // yy-mm-dd - format
    const now = new Date();

    if (now >= weddingDate) {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setTimerExpired(true);
      return;
    }
    const difference = weddingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setCountdown({ days, hours, minutes, seconds });
  };

  return (
    <section>
      <div
        className="event-section-container"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="event-title">
          <h2
            className={`english-text ${
              language === "kannada" ? "kannada-text" : ""
            }`}
          >
            {translations[language].timeUntilEvent}
          </h2>
        </div>
        {timerExpired ? (
          <div>
            <p>{translations[language].weddingStatus}</p>
          </div>
        ) : (
          <div className="countdown-timer">
            <div className="countdown-item">
              <span className="countdown-value">{countdown.days}</span>
              <span className="countdown-label">
                {translations[language].numDays}
              </span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.hours}</span>
              <span className="countdown-label">
                {translations[language].numHours}
              </span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.minutes}</span>
              <span className="countdown-label">
                {translations[language].numMinutes}
              </span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.seconds}</span>
              <span className="countdown-label">
                {translations[language].numSeconds}
              </span>
            </div>
          </div>
        )}
        <div className="god-grace-text">
          <p>{translations[language].eventMessage}</p>
        </div>
        <div className="wedding-event-wrapper">
          <h1
            className={`event-title ${
              language === "kannada" ? "kannada-title" : ""
            }`}
          >
            {translations[language].weddingFunction}
          </h1>
          <div className="wedding-event-content">
            <div className="reception-content">
              <h1
                className={`reception-title ${
                  language === "kannada" ? "kannada-font" : ""
                }`}
              >
                {translations[language].reception}
              </h1>
              <p>{translations[language].receptionDetails}</p>
            </div>
            <div className="divider"></div>

            <div className="muhurtham-content">
              <h1
                className={`muhurtha-title ${
                  language === "kannada" ? "kannada-word" : ""
                }`}
              >
                {translations[language].muhurtha}
              </h1>
              <p>{translations[language].muhurthamDetails}</p>
            </div>
          </div>
          <div className="location-content">
            <p>
              {translations[language].addressDetails}{" "}
              <i className="pi pi-map-marker location-icon"></i>
            </p>
          </div>
          <div className="button-wrapper">
            <Button
              label="Google Maps"
              icon="pi pi-map-marker"
              className="custom-google-maps-button"
              onClick={() =>
                window.open("https://maps.app.goo.gl/miRP5pHbEvi2xbZK9")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
