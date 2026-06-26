import "./styles.scss";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Image } from "primereact/image";
import Image1 from "../../../../Assets/images/galleryImage1.jpeg";
import Image2 from "../../../../Assets/images/galleryImage2.jpeg";
import Image3 from "../../../../Assets/images/galleryImage3.jpeg";
// import Image4 from "../../../../Assets/images/gallery-image4.jpg";
// import Image5 from "../../../../Assets/images/gallery-image5.jpg";
// import Image6 from "../../../../Assets/images/gallery-image6.jpg";
// import Image7 from "../../../../Assets/images/gallery-image7.jpg";
// import Image8 from "../../../../Assets/images/gallery-image8.jpg";
// import Image9 from "../../../../Assets/images/gallery-image9.jpg";
// import Image10 from "../../../../Assets/images/gallery-image10.jpg";
// import Image11 from "../../../../Assets/images/gallery-image11.jpg";
// import Image12 from "../../../../Assets/images/gallery-image12.jpg";

const GallerySection = ({ translations, language }) => {
  const images = [
    {
      id: 1,
      src: Image1,
      alt: "Image 1",
    },

    {
      id: 2,
      src: Image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: Image3,
      alt: "Image 3",
    },
    // {
    //   id: 4,
    //   src: Image4,
    //   alt: "Image 4",
    // },
    // {
    //   id: 5,
    //   src: Image5,
    //   alt: "Image 5",
    // },
    // {
    //   id: 6,
    //   src: Image6,
    //   alt: "Image 6",
    // },
    // {
    //   id: 7,
    //   src: Image7,
    //   alt: "Image 7",
    // },
    // {
    //   id: 8,
    //   src: Image8,
    //   alt: "Image 8",
    // },
    // {
    //   id: 9,
    //   src: Image9,
    //   alt: "Image 9",
    // },
    // {
    //   id: 10,
    //   src: Image10,
    //   alt: "Image 10",
    // },
    // {
    //   id: 11,
    //   src: Image11,
    //   alt: "Image 11",
    // },
    // {
    //   id: 12,
    //   src: Image12,
    //   alt: "Image 12",
    // },
  ];

  return (
    <div className="gallery-container" data-aos="fade-up">
      <div class="gallery-header" data-aos="fade-up">
        <h2 className="gallery-title" data-aos="fade-up">
          {translations[language].galleryHeading}
        </h2>
      </div>

      <div className="description-content" data-aos="fade-up">
        <span className="description-text">
          {translations[language].galerytitle}
        </span>
      </div>
      <div data-aos="fade-up">
        <Carousel
          autoPlay={true}
          interval={3000}
          showStatus={false}
          swipeable={true}
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={false}
          className="image-carousel"
          transitionTime={1200}
          animationHandler="slide"
        >
          {images.map((item) => (
            <div className="couple-images-wrapper">
              <Image
                src={item.src}
                alt={item.alt}
                className="couple-images"
                preview
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default GallerySection;
