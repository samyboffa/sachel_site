import React from 'react'

const SponsorsHero = () => {
  return (
    <div className='container-fluid sponsor_container '>
      <div className="row h-100  d-flex ">
         <div className="col-md-6   sponsors_data text-noir  ">
              <h1 className="hero_title p-4 my-4 f56 fw-bold text-uppercase termina lh-sm">LE POINT DE DÉPART DE VOTRE COURSE AVEC NOUS !</h1>
              <p className="manrope p-4 lh-lg  f16 fw-semibold ">Investissez sur l’avenir  et la valeur « sport » en devenant partenaire de mes saisons de compétitions. Le parrainage sportif va au-delà de la visibilité : c’est une collaboration dans le cadre de laquelle votre entreprise s'associe à la croissance, à l'ambition et à l'énergie de la jeunesse. Ensemble, bâtissons un avenir gagnant.</p>
              
         </div>
         <div className="col-md-6 sponsor_hero_img_container">
            {<img src="./sponsor_hero.png" alt="racing_img" className='sponsor_hero_racer' />}
         </div>
        </div>
      <img src="./hero_banner.png" alt="banner" className='sponsor_banner' />
    </div>
  )
}

export default SponsorsHero