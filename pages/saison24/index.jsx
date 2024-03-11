import Courses from "@/components/commons/saison24Components/listeCourses";
import React from "react";
import saison24 from "@/data/saison24";

const Saison24 = () => {
  return (
    <div className="container">
      <Courses liste_courses={saison24} link="#" title="SAISON 2024"/>
    </div>
  );
};

export default Saison24;
