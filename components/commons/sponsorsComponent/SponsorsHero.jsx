import React from 'react'

const SponsorsHero = () => {
  return (
    <div className='container-fluid sponsor_container marginB-200 '>
      <div className="row d-flex ">
         <div className="col-md-5 col-sm-12 p-md-5  text-noir  ">
              <h1 className="sponsor-hero-title  p-sm-0  my-4  text-uppercase termina700 ">LE POINT DE DÉPART DE VOTRE COURSE AVEC NOUS !</h1>
              <p className="manrope  lh-lg  f16 fw-500 ">Investissez sur l’avenir  et la valeur « sport » en devenant partenaire de mes saisons de compétitions. Le parrainage sportif va au-delà de la visibilité : c’est une collaboration dans le cadre de laquelle votre entreprise s'associe à la croissance, à l'ambition et à l'énergie de la jeunesse. Ensemble, bâtissons un avenir gagnant.</p>             
         </div>
         <div className="col-md-7 col-sm-12 p-0  d-flex jcc sponsor_hero_img_container">
            <img src="./sponsor_hero.png" alt="racing_img" className='img-fluid ' />
             
         </div>
        </div>
      <img src="./hero_banner.png" alt="banner" className='sponsor_banner d-sm-none' />
    </div>
  )
}

export default SponsorsHero