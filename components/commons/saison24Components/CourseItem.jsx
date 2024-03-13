import React from "react";

const CourseItem = ({ idx, course }) => {
  return (
    <div
      className={`container d-flex justify-content-center ${
        idx % 2 == 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="col-md-5 d-md-block d-xs-none "></div>
      <div className="position-relative d-md-flex d-xs-none">
        <div className="number text-center d-flex aic jcc  termina700 f24 bg-noir text-light">
          {idx + 1}
        </div>
        <div className="separator"></div>
      </div>
      <div className="col-md-5 flex-1 my-xs-5 col-xs-12">
        <img src={course.imgUrl} alt="course24" className="w-100" />
        <h4 className="f32 termina600 lh-3 my-4">{course.title}</h4>
        <p className="manrope fw-500 lh-32">{course.text}</p>
      </div>
    </div>
  );
};

export default CourseItem;
