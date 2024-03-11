import React from "react";
import temoignage from "@/data/temoignage";

const Carousel = () => {
  return (
    <div className="container-fluid carousel-section p-3 my-5">
      <div
        id="carouselExampleControls"
        class="carousel slide h-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner h-100  ">
          <h6 className="text-uppercase f14 fw-600 termina temoignage-titre text-center text-yellow my-3">
            temoignage
          </h6>
          {temoignage.map((temoigne, idx) => {
            return (
              <div key={idx} class="carousel-item active  ">
                <div className="temoignage">
                  <p className="text-temoignage p-md-5 p-sm-0 text-light text-center w-50 fw-600 text-uppercase mx-auto ">
                    {temoigne.txt}
                  </p>
                  <div className="auteur-temoignage d-flex aic jcc ">
                    <img src={temoigne.authImgUrl} alt="" />
                    <h6 className="nom-auteur f14 text-light text-center my-0 mx-2">
                      {temoigne.authName}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
