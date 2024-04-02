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
  style,
}) => {
  return (
    <div className="container">
      <section
        className={
          reverse
            ? "row d-flex justify-content-between marginB-200 mx-xs-auto p-xs-3 flex-md-row-reverse   "
            : "row d-flex  justify-content-between p-xs-3 mx-xs-auto marginB-200"
        }
      >
        <div className="col-lg-5 col-md-5 col-xl-4 p-0 col-xs-12 mb-xs-2 d-flex flex-column justify-content-center  align-items-start">
          {preTitle ? (
            <p className="termina700 f14  text-uppercase">{preTitle}</p>
          ) : null}
          <p
            className={`termina600 info_section_title text-uppercase mb-3 ${style}`}
          >
            {title}
          </p>
          <p className="manrope f16 lh32 fw-500 text-noir mb-3">{txt}</p>
          <div className={Array ? "mb-3" : "d-none"}>
            {Array?.map((item, idx) => {
              return <CheveronTxt item={item} key={idx} />;
            })}
          </div>
          <button
            className={
              btnTxt
                ? "text-uppercase customBtn border-0 p-3 manrope f16 bg-white  fw-800 "
                : "hidden"
            }
          >
            {btnTxt}
          </button>
        </div>
        <div className="col-md-7 p-0 col-xs-12">
          <img src={imgUrl} alt="sachel_pilote" className="info_sec_img" />
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
