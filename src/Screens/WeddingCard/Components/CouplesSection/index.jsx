import "./styles.scss";
import React from "react";
// import brideImage from "../../../../Assets/images/bride-profile.png";
// import groomImage from "../../../../Assets/images/groom-profile.png";
import brideImage from "../../../../Assets/images/bride-img.jpg";
import groomImage from "../../../../Assets/images/groom-img.jpg";

const CouplesSection = ({ language, translations, animateBrideGroom }) => {
  return (
    <section>
      <div className="couple-section">
        <div className="section-title">
          {" "}
          {translations[language].coupleSectionTitle}
        </div>
        <div className="first-heart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="opacity-50"
            viewBox="0 0 16 16"
            className="animate-love"
          >
            <path
              fill-rule="evenodd"
              d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"
            ></path>
          </svg>
        </div>
        <div className="invitation-message">
          <h1 className="invitation-heading">
            {translations[language].divineMotherGreeting}
          </h1>
        </div>
        <div className="deity-name">
          <h3 className="deity-heading">{translations[language].godName}</h3>
        </div>
        <div className="invitation-details">
          <h4 className="invitation-text">
            {translations[language].invitationMessage}
          </h4>
        </div>
        <div className="couple-photo-wrapper">
          <div
            className={`bride-photo-container ${
              animateBrideGroom ? "smooth-fade-in-right" : ""
            }`}
            style={
              animateBrideGroom ? { visibility: "visible", opacity: 1 } : {}
            }
          >
            <img src={groomImage} alt="bride-image" />
            <h4 className="bride-name">{translations[language].brideName}</h4>
            <h3 className="bride-role">
              S/o {translations[language].brideParentName}
            </h3>
          </div>
          <div className="and-symbol-container">
            <h1>
              <i
                className="pi pi-heart-fill"
                style={{ fontSize: "2rem", color: "red" }}
              ></i>
            </h1>
          </div>

          <div
            className={`groom-photo-container ${
              animateBrideGroom ? "smooth-fade-in-left" : ""
            }`}
            style={
              animateBrideGroom ? { visibility: "visible", opacity: 1 } : {}
            }
          >
            <img src={brideImage} alt="groom-image" />
            <h4 className="groom-name">{translations[language].groomName}</h4>
            <h3 className="groom-role">
              D/o {translations[language].groomParentName}
            </h3>
          </div>
        </div>
        <div className="second-heart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            class="opacity-50"
            viewBox="0 0 16 16"
            className="animate-love"
          >
            <path
              fill-rule="evenodd"
              d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CouplesSection;
