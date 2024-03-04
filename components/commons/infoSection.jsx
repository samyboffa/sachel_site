import React from "react";
import CheveronTxt from "./cheveronTxt";

const InfoSection = ({ imgUrl, reverse, title, txt, btnTxt, Array }) => {
  return (
    <div className="container my-5">
      <section
        className={
          reverse
            ? "row d-flex container section_container flex-md-row-reverse "
            : "row d-flex container section_container  "
        }
      >
        <div className=" img_container d-flex justify-content-center">
          <img src={imgUrl} alt="sachel_pilote" className="section_img" />
        </div>
        <div className="col-md-1 section_description d-flex flex-column justify-content-center h-100 my-auto text-noir ">
          <h5 className="section_title fw-bold mb-3 mt-5">{title}</h5>
          <p className="section_text lh-lg fw-medium mb-3  ">{txt}</p>
          {Array?.map((item, idx) => {
            return <CheveronTxt item={item} key={idx} />;
          })}

          <button
            className={
              btnTxt ? "sectionBtn bg-light-subtle fw-bolder " : "hidden"
            }
          >
            {btnTxt}
          </button>
        </div>
      </section>
    </div>
  );
};

export default InfoSection;
