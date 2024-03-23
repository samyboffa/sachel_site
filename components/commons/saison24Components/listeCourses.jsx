import React from "react";
import CourseItem from "./CourseItem";
import CustomButton from "../CustomButton";
import DevenirSponsor from "../DevenirSponsor";

const Courses = ({ liste_courses, link, title, subTitle }) => {
  return (
    <div className="my-5 container">
      <h1 className="text-center f48 termina700">{title}</h1>
      <p className="mapnrope f16 fw-500 text-md-center text-sm-left mx-auto my-5">
        {subTitle}
      </p>
      {liste_courses?.map((course, idx) => {
        return <CourseItem key={idx} course={course} idx={idx} />;
      })}
      <div className="d-flex jcc">
        <DevenirSponsor style="bg-yellow" text="PRENEZ PART à L’AVENTURE" />
      </div>
    </div>
  );
};

export default Courses;
