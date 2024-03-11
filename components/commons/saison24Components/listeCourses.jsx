import React from "react";
import CourseItem from "./CourseItem";
import CustomButton from "../CustomButton";

const Courses = ({ liste_courses, link, title, subTitle }) => {
  return (
    <div className="my-5 container">    
        <h1 className="text-center f48 fw-bold termina">{title}</h1>
        <p className="mapnrope f16 fw-500 text-md-center text-sm-left mx-auto my-5">{subTitle}</p>
      {liste_courses?.map((course, idx) => {
        return <CourseItem key={idx} course={course} idx={idx} />;
      })}
      <div className="d-flex jcc">
        <CustomButton
          text="prenez part à l'aventure"
          link={link}
          style="bg-yellow f16 fw-bold manrope p-3 text-uppercase my-5 border-0 "
        />
      </div>
    </div>
  );
};

export default Courses;
