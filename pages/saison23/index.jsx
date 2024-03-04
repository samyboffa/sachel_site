import Courses from "@/components/commons/saison24Components/listeCourses";
import React from "react";
import saison23 from "@/data/saison23";

const Saison23 = () => {
  return (
    <div>
      <Courses liste_courses={saison23} link="#" />
    </div>
  );
};

export default Saison23;
