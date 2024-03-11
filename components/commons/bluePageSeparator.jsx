import React from "react";
import CustomButton from "./CustomButton";
import CheveronTxt from "./cheveronTxt";

const BluePageSeparator = ({ title, text, imgUrl, btn,Array }) => {
  return (
    <div className="blueSeparator container-fluid ">
      <div className="row d-flex">
        <div className="data col-md-6 col-sm-12 p-5 text-light ">
          <h5 className="data_title f32 fw-bold text-uppercase mb-md-5 mb-sm-4">{title}</h5>
          <p className="data_text lh32 f16 fw-500 mb-2">{text} </p>
 
          {btn ? (
            <CustomButton
              style="btn bg-yellow text-center"
              text="EN SAVOIR PLUS"
              link="#"
            />
          ) : (
            ""
          )}
          <div className="mb-3">
            {Array?.map((item, idx) => {
            return <CheveronTxt item={item} key={idx} />;
          })}
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex jcc align-items-center">
          <img src={imgUrl} alt="sep_img" className="img-fluid   separator_img   " />
        </div>
      </div>
    </div>
  );
};

export default BluePageSeparator;
