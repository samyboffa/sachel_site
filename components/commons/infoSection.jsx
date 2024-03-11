import React from "react";
import CheveronTxt from "./cheveronTxt";

const InfoSection = ({ imgUrl, reverse, title, txt, btnTxt, Array,preTitle }) => {
  return (
    <div className="container my-5">
      <section
        className={
          reverse
            ? "row d-flex container flex-md-row-reverse  "
            : "row d-flex container   "
        }
      >
        <div className="col-md-5  col-xs-12 d-flex flex-column justify-content-center   align-items-start">
          {preTitle? <p className="termina f14 fw-700 text-uppercase">{preTitle}</p>:null}
          <h5 className="termina f32 fw-600 text-uppercase mb-3">{title}</h5>
          <p className="marope f16 lh32 fw-500 text-noir mb-3  ">{txt}</p>
          <div className={Array? "mb-3":"d-none"}>
            {Array?.map((item, idx) => {
            return <CheveronTxt item={item} key={idx} />;
          })}
          </div>

          <button
            className={
              btnTxt ? "manrope w-sm-100 border-0 text-uppercase f16 p-3 bg-light-subtle btn fw-800 " : "hidden"
            }
          >
            {btnTxt}
          </button>
        </div>
        <div className=" img_container col-md-7 d-flex jcc col-sm-12 h-100">
          <img src={imgUrl} alt="sachel_pilote" className=" img-fluid" />
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
