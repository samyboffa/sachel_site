import CustomButton from "@/components/commons/CustomButton";
import DevenirSponsor from "@/components/commons/DevenirSponsor";
import InfoSection from "@/components/commons/infoSection";
import Sponsors from "@/components/commons/sponsors";
import Majeur from "@/components/commons/sponsorsComponent/Majeur";
import Partenariat from "@/components/commons/sponsorsComponent/Partenariat";
import SponsorsHero from "@/components/commons/sponsorsComponent/SponsorsHero";
import Stats from "@/components/commons/stats";
import React from "react";

const index = () => {
  return (
    <div>
      <SponsorsHero />
      <Sponsors data={true} width="col-md-6" />
      <Partenariat />
      <InfoSection
        imgUrl="./partenariat_section_4.png"
        txt="Le Parrainage sportif (ou sponsoring sportif) consiste à apporter un soutien, notamment matériel et financier, à un sportif en vue de sa participation à une compétition et aux fins de développement de sa carrière. Le « Parrain » reçoit une contrepartie directe, principalement en terme de publicité, son nom et sa marque étant associés aux compétitions et activités du sportif parrainé (communication sur les réseaux sociaux, logotisation, présence sur les évènements…). L’image de marque du Parrain est valorisée."
        title="INVESTISSEZ DANS L’AVENIR D’UN JEUNE SPORTIF"
        btnTxt="VOIR MA PLAQUETTE DE PRésentation"
        reverse={true}
      />
      <InfoSection
        imgUrl="./partenariat_section_5.png"
        txt="Investissez sur l’avenir  et la valeur « sport » en devenant partenaire de mes saisons de compétitions. Le parrainage sportif va au-delà de la visibilité : c’est une collaboration dans le cadre de laquelle votre entreprise s'associe à la croissance, à l'ambition et à l'énergie de la jeunesse. Ensemble, bâtissons un avenir gagnant."
        title="EN DEVENANT MON PARTENAIRE ET SPONSOR"
        reverse={false}
      />
      <Majeur />
      <Stats
        num1="60%"
        num2="2.5 Mrd&euro;"
        num3="1 club"
        txt1="De réduction d’impôt sur du mécénat"
        txt2="Le marché du sponsoring en France"
        txt3="Des partenaires"
      />
      <div className="d-flex jcc">
        <DevenirSponsor
          text="devenir sponsor"
          style="bg-yellow p-3 text-uppercase mx-auto"
        />
      </div>
      <div className="text-center my-5 ">
        <p className="rock-salt f20 fw-medium w-25 mx-auto">
          “La course, c'est la vie. Tout le reste, avant ou après, n'est que de
          l'attente. ”
        </p>
        <p className="smooch f40 fw-semibold ">Steve McQueen</p>
      </div>
    </div>
  );
};

export default index;
