import Courses from "@/components/commons/saison24Components/listeCourses";
import React from "react";
import saison23 from "@/data/saison23";
import BluePageSeparator from "@/components/commons/bluePageSeparator";
import CheveronTxt from "@/components/commons/cheveronTxt";

const Saison23 = () => {
  const Array=["14 ème sur 35 concurrents","4 courses sur ce meeting","1 circuit de formule 1"]
  return (
    <div className="" >
      <Courses liste_courses={saison23} link="#" title="SAISON 2023" subTitle="Découvrez les temps forts de la saison 2023 de Sachel Rotge, une année prometteuse remplie d'excitation et de compétition. Suivez le parcours de Sachel alors qu'il se prépare à affronter les défis du championnat, en repoussant ses limites pour atteindre de nouveaux sommets sur les circuits."/>
      <BluePageSeparator text="Découvrez la Mitjet, une compétition passionnante dans laquelle Sachel Rotge a participé lors du meeting du 6 au 8 octobre 2023 sur le circuit, Paul Ricard le Castellet F1. La course Mitjet se déroule sur des circuits emblématiques à travers le monde, offrant des défis uniques à chaque étape. Des virages serrés aux longues lignes droites, ces circuits mettent à l'épreuve la technique, la précision et le talent des pilotes, créant des batailles intenses pour la victoire." imgUrl='./saison24_blue.png' title="Mitjet 2L" />
      <div className="saison23_section3 container  mx-auto row d-flex jcsb my-5">
        <div className="img_container_s23_sec3 d-xs-none d-md-block col-md-9 px-0"><img src="./multijet.png" alt="multijet" className="" /></div>
        <div className="col-md-3 col-xs-12">
          <h4 className="text-uppercase fw-700 lh-24 f14 text-noir termina se3_preTitle">mon auto lors du meeting du 6 au 8 octobre 2023 sur le circuit:</h4>
          <h6 className="text-uppercase fw-600 f32 text-noir termina  my-5 sec3_title">paul ricard le castellet f1</h6>
          <img src="./multijet.png" alt="multijet" className="d-xs-block w-100 d-md-none" />
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
