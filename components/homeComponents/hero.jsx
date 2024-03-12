import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Hero = () => {
  return (
    <div className='container-fluid hero_container'>
      <div className="row d-flex">
        <div className="col-md-6 col-sm-12 p-md-5 text-noir ">
              <h1 className="f56 my-sm-4 text-uppercase termina700 lh-sm-base">Sachel RotgE</h1>
              <h3 className="f32 text-yellow my-sm-3 text-uppercase termina600 lh-sm">Pilote AUTOMOBILE</h3>
              <div className="hero_separator my-sm-3 "></div>
              <div className="manrope lh-sm-base my-sm-3 f16 fw-500 "> Plongez dans l'univers auto de Sachel Rotgé - Le jeune prometteur du sport automobile qui a pour objectif d'unir nos forces sur les circuits prestigieux : ensemble, vers ma performance !</div>
              <h4 className="termina600  text-noir f32  p-sm-0 my-sm-3">EN ROUTE VERS UNE CARRIÈRE DE PILOTE PROFESSIONNEL !</h4>
              
        </div>
        <div className="col-md-6 col-sm-12 d-flex jcc aic sponsor_hero_img_container">
          <img src="./hero_img.png" alt="racing_img" className='img-fluid' />
        </div>
      </div>
      <img src="./hero_banner.png" alt="banner" className='banner d-sm-none' />
    </div>
  )
}

export default Hero

