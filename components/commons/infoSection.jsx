import React from "react";
import CheveronTxt from "./cheveronTxt";

const InfoSection = ({
  imgUrl,
  reverse,
  title,
  txt,
  btnTxt,
  Array,
  preTitle,
}) => {
  return (
    <div className="container marginB-200">
      <section
        className={
          reverse
            ? "row d-flex container flex-md-row-reverse   "
            : "row d-flex container   "
        }
      >
        <div className="col-md-5 mb-xs-2 col-xs-12 d-flex flex-column justify-content-center   align-items-start">
          {preTitle ? (
            <p className="termina f14 fw-700 text-uppercase">{preTitle}</p>
          ) : null}
          <h5 className="termina600 f32 text-uppercase mb-3">{title}</h5>
          <p className="marope f16 lh32 fw-500 text-noir mb-3  ">{txt}</p>
          <div className={Array ? "mb-3" : "d-none"}>
            {Array?.map((item, idx) => {
              return <CheveronTxt item={item} key={idx} />;
            })}
          </div>
          <button
            className={
              btnTxt
                ? "text-uppercase customBtn border-0 p-3 manrope f16 bg-light-subtle  fw-800 "
                : "hidden"
            }
          >
            {btnTxt}
          </button>
        </div>
        <div className="col-md-7 col-xs-12">
          <img src={imgUrl} alt="sachel_pilote" className="info_sec_img" />
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
