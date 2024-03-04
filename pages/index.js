import BluePageSeparator from "@/components/commons/bluePageSeparator";
import InfoSection from "@/components/commons/infoSection";
import Stats from "@/components/homeComponents/stats";
import Hero from "@/components/homeComponents/hero";
import Sponsors from "@/components/homeComponents/sponsors";

export default function Home() {
  return (
    <>
      <Hero />
      <InfoSection
        imgUrl="./IMAGE_SACHEL.png"
        title="En route vers une carrière de pilote professionnel"
        txt="Depuis son plus jeune âge, sa passion pour la course et l'automobile a été le moteur de son ambition sans limites.À seulement 17 ans, Sachel possède déjà une expérience de pilotage impressionnante et ses objectifs à court terme sont audacieux et reflètent son état d'esprit conquérant."
        btnTxt="en savoir plus"
      />
      <BluePageSeparator
        title="saison 2024"
        text="La saison 2024 sera cruciale pour Sachel ! Cette année marquera ses essais en Formule 4, Ligier JS2R, GT, et son immersion dans l'aventure Feed Racing F4. Attendez-vous à des moments palpitants sur les circuits, où il repoussera les limites de la vitesse et de la précision. Suivez son ascension, mêlant compétitions réelles et virtuelles, pour une saison exceptionnelle pleine de nouveaux défis et de succès."
        imgUrl="./home_sep_img.png"
        btn={true}
      />
      <Stats />
      <InfoSection
        imgUrl="./endurance.png"
        title="ensemble, vers la performance !"
        txt="Sachel, passionné de sport automobile, se prépare pour une période cruciale de sa carrière. En 2024, il effectuera ses premiers essais en Formule 4, Ligier JS2R et GT, tout en disputant sa dernière année de compétition en karting et en s'engageant dans l'aventure Feed Racing F4. L'année suivante marquera son passage complet au monde de l'automobile, se lançant dans les compétitions d'endurance. À l'horizon 2028-2029, Sachel aspire à devenir un pilote professionnel d'endurance, réalisant ainsi son rêve ultime de participer aux prestigieuses compétitions de cette discipline."
        btnTxt=""
      />
      <Sponsors />
    </>
  );
}
