import "./styles.scss";
import React, { useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "primereact/button";
import music from "../../Assets/music/RHTDM-Rain-Theme.mp3";
import profileImage from "../../Assets/images/coupleProfileFront.jpeg";
import HomeSection from "./Components/HomeSection";
import CouplesSection from "./Components/CouplesSection";
import EventSection from "./Components/EventSection";
import VenueSection from "./Components/VenueSection";
import { translations } from "../../Utils/languageTranslation";
import { initializeAOS } from "../../Utils/commonMethods";
import GallerySection from "./Components/GallerySection";

const WeddingCard = () => {
  const tabs = useMemo(
    () => [
      { id: "home", icon: "pi pi-home", label: "Home" },
      { id: "bride-groom", icon: "pi pi-user", label: "Bride & Groom" },
      { id: "event", icon: "pi pi-calendar", label: "Time & Event" },
      { id: "gallery", icon: "pi pi-images", label: "Gallery" },
      { id: "venue", icon: "pi pi-map-marker", label: "Venue" },
    ],
    [],
  );

  const audioRef = useRef(null);
  const [activeTab, setActiveTab] = useState("home");
  const [language, setLanguage] = useState("english");
  const [showCard, setShowCard] = useState(false);
  const [animateBrideGroom, setAnimateBrideGroom] = useState(false);
  const [pause, setPause] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    initializeAOS();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = tabs.map((tab) => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveTab(section.id);
            if (section.id === "bride-groom") {
              setAnimateBrideGroom(true);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [tabs]);

  useEffect(() => {
    if (activeTab !== "bride-groom") {
      setAnimateBrideGroom(false);
    }
  }, [activeTab]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (isMusicPlaying && audioRef.current) {
          audioRef.current.pause();
          setIsMusicPlaying(false);
        }
      } else {
        if (!pause && audioRef.current) {
          audioRef.current.play();
          setIsMusicPlaying(true);
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMusicPlaying, pause]);

  const handleButtonClick = () => {
    setShowCard(true);

    audioRef.current = new Audio(music);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    audioRef.current
      .play()
      .then(() => {
        setIsMusicPlaying(true);
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
    triggerConfetti();
  };

  const handleTabClick = (tabId) => {
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveTab(tabId);
  };

  const togglePlayPause = () => {
    if (pause) {
      audioRef.current.play();
      setIsMusicPlaying(true);
    } else {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    }
    setPause(!pause);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "kannada" : "english"));
  };

  const triggerConfetti = () => {
    var count = 250;
    var defaults = {
      origin: { y: 0.9 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        scalar: 0.5,
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div className="wedding-card-container">
      {!showCard ? (
        // ----------------------------- initial screen ------------------------
        <div className="first-screen-wrapper">
          <h1 className="first-screen-wedding-title animate__animated animate__fadeInDown">
            The Wedding Of
          </h1>
          <img
            src={profileImage}
            alt="Wedding"
            className="first-screen-bride-groom-image animate__animated animate__zoomIn"
          />
          <h1 className="first-screen-couple-name">Ashwath</h1>
          <i className="pi pi-heart-fill heart-icon"></i>
          <h1 className="first-screen-couple-name">Sangeetha</h1>
          <p className="first-screen-greeting animate__animated animate__fadeInDown">
            Dear Mr./Mrs./Ms./Brothers and Sisters, All friends
          </p>
          <Button
            label="Open Invitation"
            onClick={handleButtonClick}
            className="p-button-rounded p-button-outlined animate__animated animate__fadeInUp"
            icon="pi pi-envelope"
          />
        </div>
      ) : (
        <div className="wedding-card-content animate__animated animate__fadeIn">
          {/* --------------------------tab section -------------------------- */}
          <div className="custom-tab-menu">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                <i className={tab.icon}></i>
                <span>{tab.label}</span>
              </div>
            ))}
          </div>

          {/* -------------------------- Home section ---------------------------- */}
          <div className="home-container">
            <div id="home" className="tab-content home-section">
              <HomeSection
                translations={translations}
                language={language}
                handleTabClick={handleTabClick}
              />
            </div>
          </div>

          {/* -- Wave Separator -- */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#111111"
              fill-opacity="1"
              d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>

          {/* ----------------------- bride and groom section ---------------------- */}
          <div id="bride-groom" className="bride-groom-wrapper">
            <CouplesSection
              translations={translations}
              language={language}
              animateBrideGroom={animateBrideGroom}
            />
          </div>

          {/* -- Wave Separator -- */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#111111"
              fill-opacity="1"
              d="M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,165.3C560,160,640,128,720,128C800,128,880,160,960,186.7C1040,213,1120,235,1200,218.7C1280,203,1360,149,1400,122.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>

          {/* --------------------------god's blessing message ----------------------- */}
          <div class="message-container">
            <div data-aos="fade-up" data-aos-duration="2000">
              <h4>{translations[language].godName}</h4>

              <p>{translations[language].Sambandha}</p>
            </div>
          </div>

          {/* -- Wave Separator -- */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#111111"
              fill-opacity="1"
              d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>

          {/* ------------------------------- Event section ------------------------------ */}
          <div id="event" className="event-section">
            <EventSection translations={translations} language={language} />
          </div>

          {/* -------------------------------Gallery section------------------------------ */}

          <div id="gallery" className="gallery-section">
            <GallerySection translations={translations} language={language} />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-black"
          >
            <path
              fill="#111111"
              fill-opacity="1"
              d="M0,96L30,106.7C60,117,120,139,180,154.7C240,171,300,181,360,186.7C420,192,480,192,540,181.3C600,171,660,149,720,154.7C780,160,840,192,900,208C960,224,1020,224,1080,208C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
            ></path>
          </svg>

          {/* -------------------------------------- venue section ----------------------- */}
          <div id="venue" className="venue-section">
            <VenueSection translations={translations} language={language} />
          </div>

          {/* -- Wave Separator -- */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            class="color-theme-black"
          >
            <path
              fill="#111111"
              fill-opacity="1"
              d="M0,224L34.3,234.7C68.6,245,137,267,206,266.7C274.3,267,343,245,411,234.7C480,224,549,224,617,213.3C685.7,203,754,181,823,197.3C891.4,213,960,267,1029,266.7C1097.1,267,1166,213,1234,192C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>

          {/* --------------------------------footer section ----------------------------- */}
          <div className="footer-container">
            <p className="footer-thank-you">
              {translations[language].blessingMessage}
            </p>
            <h1 className="footer-title">
              {translations[language].footerTitle}
            </h1>

            <div className="horizontal-line"></div>
            <div className="footer-content">
              <div className="footer-builder">
                Build By <i className="pi pi-heart-fill heart-icon"></i> Keerthi
                Prakash
              </div>
              <div className="footer-github">
                <i className="pi pi-instagram github-icon"></i>
                <a
                  target="_blank"
                  // href="https://github.com/naikkeerthi"
                  href="https://www.instagram.com/naik_keerthi.67?igsh=aHBrbndycTJwMjFy&utm_source=qr"
                  className="git-link"
                  rel="noreferrer"
                >
                  {" "}
                  Keerthi Prakash
                </a>
              </div>
            </div>
          </div>

          {/* ---------------------------language and music control button ------------------- */}
          <div className="action-content">
            <div className="language-div">
              <Button
                rounded
                label={language === "english" ? "ಕ" : "E"}
                onClick={toggleLanguage}
                className={
                  language === "english" ? "kannada-button" : "english-button"
                }
              />
            </div>
            <div className="play-button" onClick={togglePlayPause}>
              <Button
                rounded
                onClick={togglePlayPause}
                className="music-button"
              >
                {pause ? (
                  <i className="pi pi-play-circle"></i>
                ) : (
                  <i className="pi pi-pause-circle"></i>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeddingCard;
