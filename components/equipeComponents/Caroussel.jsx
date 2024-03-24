import React, { useState } from "react";

const Caroussel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel p-5">
      <h6 className="text-uppercase f14 termina600  text-center text-yellow my-3">
        temoignages
      </h6>
      <div className="carousel-inner p-5">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item text-center p-5 ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <p className="text-temoignage termina600 f-32 p-5">{item.txt}</p>
            <div className="d-flex align-items-center justify-content-center mt-5 gap-2">
              <img src={item.authImgUrl} alt={item.authName} />
              <p className="p-0 m-0 temoignage-auteur termina600">
                {item.authName}
              </p>
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev cursor-pointer" onClick={goToPrev}>
        &#10094;
      </a>
      <a className="carousel-control-next cursor-pointer" onClick={goToNext}>
        &#10095;
      </a>
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator  ${
              index === currentIndex ? "activeindicator" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Caroussel;
