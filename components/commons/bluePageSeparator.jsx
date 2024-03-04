import React from "react";
import CustomButton from "./CustomButton";

const BluePageSeparator = ({ title, text, imgUrl, btn }) => {
  return (
    <div className="blueSeparator w-100 ">
      <div className="container  d-flex blueSeparator_container">
        <div className="data my-auto text-light ">
          <h5 className="data_title f32 fw-bold upCase mb-5">{title}</h5>
          <p className="data_text lh-lg f16 fw-medium mb-2 ">{text} </p>

          {btn ? (
            <CustomButton
              style="btn bg-yellow btn-outline-success text-left"
              text="EN SAVOIR PLUS"
              link="#"
            />
          ) : (
            ""
          )}
        </div>
        <div className="img_container">
          <img src={imgUrl} alt="sep_img" className="separator_img" />
        </div>
      </div>
    </div>
  );
};

export default BluePageSeparator;
