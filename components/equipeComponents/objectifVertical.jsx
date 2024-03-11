import React from 'react'

const ObjectifVertical = () => {
  return (
    <div className='vertical_objectif p-3'>
        <div className='row mx-auto'>
        <div className='col-xs-2 d-flex flex-column aic'>
          <div className="circle  border border-yellow d-flex aic jcc p-0 m-0 rounded-circle ">
           <div className="inner-circle bg-yellow rounded-circle  "></div>
          </div>          
          <div className="line_vertical"></div>         
        </div>
            <div className="col-xs-10">
            <span className='termina fw-700 f32'>2024</span>
            <p className="objectif_txt_left">
                Essais automobile et ultime année de compétition en karting. Mes
                ambitions pour 2024 : faire mes premiers essais en Formule 4, Ligier
                JS2R, GT... et participer à l'aventure Feed Racing F4.
            </p>
            </div>
        </div>
        <div className='row mx-auto'>
        <div className='col-xs-2 d-flex flex-column aic'>
          <div className="circle border border-yellow d-flex aic jcc p-0 m-0 rounded-circle ">
           <div className="inner-circle bg-yellow rounded-circle  "></div>
          </div>          
          <div className="line_vertical"></div>
          
        </div>
            <div className="col-xs-10">
            <span className='termina fw-700 f32'>2025</span>
            <p className="objectif_txt_left">
                Opter entièrement pour le monde de l'automobile et se lancer dans
                l’univers des compétitions d'endurance.
            </p>
            </div>
        </div>
        <div className='row mx-auto'>
        <div className='col-xs-2 d-flex flex-column aic'>
          <div className="circle border border-yellow d-flex aic jcc p-0 m-0 rounded-circle ">
           <div className="inner-circle bg-yellow rounded-circle  "></div>
          </div>
        </div>
            <div className="col-xs-10">
            <span className='termina fw-700 f32'>2028-29</span>
            <p className="objectif_txt_left">
                Devenir un pilote professionnel d'endurance et réaliser le rêve
            ultime : participer aux prestigieuses 24 heures du Mans.
            </p>
            </div>
        </div>
    </div>
  )
}

export default ObjectifVertical