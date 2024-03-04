import React from "react";

const CourseItem = ({ idx, course }) => {
  return (
    <div
      className={`container  d-flex justify-content-center ${
        idx % 2 == 0 ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="col-md-5 "></div>
      <div className="position-relative d-flex   ">
        <div className="number text-center d-flex aic jcc  fw-bold f24 bg-noir text-light">
          {idx + 1}
        </div>
        <div className="separator"></div>
      </div>
      <div className="col-md-5 flex-1">
        <img src={course.imgUrl} alt="course24" className="w-100" />
        <h4 className="f32 fw-medium lh-3">{course.title}</h4>
        <p className="fw-semibold course-txt lh-2">{course.text}</p>
      </div>
    </div>
  );
};

export default CourseItem;
