import AOS from "aos";
import "aos/dist/aos.css";

export const initializeAOS = () => {
  AOS.init({
    offset: 200,
    duration: 2000,
    easing: "ease-in-sine",
    delay: 100,
  });
};
