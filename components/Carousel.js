import React, { useEffect, useRef } from "react";
import RatioImg from "./RatioImg";

function Carousel({ images }) {
  const carouselEl = useRef();
  const carouselInstance = useRef();

  useEffect(() => {
    import("bootstrap/js/dist/carousel").then(({ default: Carousel }) => {
      // https://getbootstrap.com/docs/5.0/components/carousel/#via-javascript
      carouselInstance.current = new Carousel(carouselEl.current, {
        interval: 2000,
      });
    });
    document.querySelector(".carousel-item").classList.add("active");
  }, []);

  return (
    <div ref={carouselEl} className="carousel slide">
      <div className="carousel-inner">
        {images.map((image) => (
          <div className="carousel-item" key={image.id}>
            <RatioImg src={image.url} alt={image.alternativeText} />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        role="button"
        onClick={() => carouselInstance.current.prev()}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        role="button"
        onClick={() => carouselInstance.current.next()}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
