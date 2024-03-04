import BluePageSeparator from "@/components/commons/bluePageSeparator";
import InfoSection from "@/components/commons/infoSection";
import Carousel from "@/components/equipeComponents/carousel";
import Endurance from "@/components/equipeComponents/endurance";
import EquipeHome from "@/components/equipeComponents/equipeHome";
import KartTeam from "@/components/equipeComponents/kartTeam";
import Objectifs from "@/components/equipeComponents/objectives";
import React from "react";

const index = () => {
  return (
    <div>
      <EquipeHome />
      <Objectifs />
      <BluePageSeparator
        title="Karting"
        text="Depuis ses débuts, Sachel a participé à la Rok Cup Italia « Junior Rok » en 2021, puis à la catégorie « Super Rok » en 2022, se classant 9e lors de la finale mondiale. En 2023, il a concouru dans la catégorie « Senior Rok », remportant la première place aux 4 heures de Brignoles SWS."
        imgUrl="./karting.png"
        btn={false}
      />
      <KartTeam />
      <InfoSection
        imgUrl="./simRacing.png"
        title="sim racing"
        txt="Sachel affine ses compétences dans le sim racing avec des résultats prometteurs. Une nouvelle équipe l'accompagnera en 2024, lui permettant de poursuivre son développement sur cette facette complémentaire aux circuits traditionnels."
        Array={[
          "2ème aux 12 heures du Mans by FFSR (2023)",
          "Pilote au sein de l’équipe Filière Endurance e-Sport 4200 points de rating sur iRacing",
          "Vice-champion Pure Driving School Endurance en LMP2",
          "Intégration de l’équipe SCUDERIA VOLPE",
        ]}
        reverse={true}
      />
      <InfoSection
        imgUrl="./auto-circuit.png"
        title="Automobile sur Circuit"
        txt="En 2023, Sachel a participé lors du meeting final de la compétition &quot;Mitjet International 2023&quot; avec l'équipe Event Spirit, atteignant la 14e place en qualifications. Il a également effectué des tests en Mitjet 2L sur des circuits renommés tels que Lurcy Lévis, Magny Cours F1 et Paul Ricard Le Castellet F1. Pour 2024, les aspirations de Sacha se tournent vers ses premiers essais en Formule 4, Ligier JS2R, GT, et l'aventure captivante de Feed Racing F4. Cette année promet d'être une étape cruciale dans sa quête de réussite dans le monde exigeant du sport automobile."
        Array={[
          "Training Camp à la Filière Endurance (2023-2024)",
          "Participation au meeting final de la compétition « Mitjet International 2023, sur le circuit Paul Ricard Le Castellet F1 avec l’équipe Event Spirit, 14ème place",
        ]}
      />
      <Endurance />
      <Carousel />
      <InfoSection
        imgUrl="./racer_section.png"
        txt="Sachel bénéficie pleinement du soutien d'une agence de marketing sportif, qui l’accompagne dans la gestion de son image et de ses partenariats. Parallèlement, Sachel est accompagné par les conseils avisés d'un cabinet juridique dédié. Grâce à cette collaboration, ses projets sont soigneusement encadrés par une expertise légale, offrant une assurance juridique indispensable et créant les conditions idéales pour la concrétisation de ses objectifs."
        title="Soutien d’une agence marketing sportive et d’un cabinet juridique"
      />
    </div>
  );
};

export default index;
