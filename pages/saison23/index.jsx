import Courses from "@/components/commons/saison24Components/listeCourses";
import React from "react";
import saison23 from "@/data/saison23";
import BluePageSeparator from "@/components/commons/bluePageSeparator";
import CheveronTxt from "@/components/commons/cheveronTxt";

const Saison23 = () => {
  const Array=["14 ème sur 35 concurrents","4 courses sur ce meeting","1 circuit de formule 1"]
  return (
    <div className="" >
      <Courses liste_courses={saison23} link="#" title="SAISON 2023"/>
      <BluePageSeparator text="Découvrez la Mitjet, une compétition passionnante dans laquelle Sachel Rotge a participé lors du meeting du 6 au 8 octobre 2023 sur le circuit, Paul Ricard le Castellet F1. La course Mitjet se déroule sur des circuits emblématiques à travers le monde, offrant des défis uniques à chaque étape. Des virages serrés aux longues lignes droites, ces circuits mettent à l'épreuve la technique, la précision et le talent des pilotes, créant des batailles intenses pour la victoire." imgUrl='./saison24_blue.png' title="Mitjet 2L" />
      <div className="saison23_section3 mx-auto row d-flex jcsb my-5">
        <div className="img_container col-md-6"><img src="./multijet.png" alt="multijet" /></div>
        <div className="col-md-5">
          <h4 className="text-uppercase fw-bold f14 text-noir termina lh-24">mon auto lors du meeting du 6 au 8 octobre 2023 sur le circuit:</h4>
          <h6 className="text-uppercase fw-bolder f32 text-noir termina lh-32 my-5">paul ricard le castellet f1</h6>
          <div className="multi_details">
            <p className="power termina f56 fw-bold lh-lg">230 cv</p>
            <div className="power-separator mx-auto "></div>
            <p className="termina f56 fw-bold lh-lg text-noir">750 kg</p>
          </div>
          {Array.map((item, idx) => {
            return <CheveronTxt item={item} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Saison23;
