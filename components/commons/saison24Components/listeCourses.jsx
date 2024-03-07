import React from "react";
import CourseItem from "./CourseItem";
import CustomButton from "../CustomButton";

const Courses = ({ liste_courses, link, title }) => {
  return (
    <div className="my-5 ">
      <h1 className="text-center f48 fw-bold saison24-title">{title}</h1>
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
