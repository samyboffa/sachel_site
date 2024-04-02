import React from "react";
import CustomButton from "./CustomButton";
import CheveronTxt from "./cheveronTxt";
import { useRouter } from "next/router";

const BluePageSeparator = ({
  title,
  text,
  imgUrl,
  btn,
  Array,
  link,
  imgTop,
  imgRight,
}) => {
  const router = useRouter();
  return (
    <div className="blueSeparator position-relative container-fluid ">
      <div className="row d-flex paddingX100">
        <div className="data col-md-6 col-xs-12 p-0 text-light">
          <h5 className="termina600 f32 text text-grey text-uppercase mb-md-4 mb-sm-4">
            {title}
          </h5>
          <p className="data_text lh32 text-grey f16 fw-500">{text} </p>
          {btn ? (
            <CustomButton
              style="bg-yellow text-center"
              text="EN SAVOIR PLUS"
              link={link}
            />
          ) : (
            ""
          )}
          <div className="mb-3">
            {Array?.map((item, idx) => {
              return <CheveronTxt item={item} key={idx} />;
            })}
          </div>
          <div
            className={
              router.pathname === "/equipe"
                ? "d-flex flex-xs-column flex-md-row align-items-center gap-2 mt-5"
                : "d-none"
            }
          >
            <img src="./Calque_1.png" alt="KartMAg" />
            <p className="rock-salt my-0 f20 lh-32  fw-400">
              “le Français Sachel Rotgé a décroché une belle 9ème place ”
            </p>
          </div>
        </div>
        <div
          className="col-md-5 col-xs-12 image-div"
          style={{ right: imgRight, top: imgTop }}
        >
          <img src={imgUrl} alt="sep_img" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default BluePageSeparator;
