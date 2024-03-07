import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const Hero = () => {
  return (
    <div className='container-fluid hero_container'>
      <div className="row h-100 d-flex">
        <div className="col-md-6 p-5  text-noir ">
              <h1 className="ps-4  f56 fw-bold text-uppercase termina lh-sm">Sachel RotgE</h1>
              <h3 className="f32 text-yellow px-4 fw-bold text-uppercase termina lh-sm">Pilote AUTOMOBILE</h3>
              <div className="hero_separator m-4"></div>
              <div className="manrope p-4 lh-lg  f16 fw-semibold "> Plongez dans l'univers auto de Sachel Rotgé - Le jeune prometteur du sport automobile qui a pour objectif d'unir nos forces sur les circuits prestigieux : ensemble, vers ma performance !</div>
              <h4 className="termina fw-semibold text-noir f32 p-4">EN ROUTE VERS UNE CARRIÈRE DE PILOTE PROFESSIONNEL !</h4>
              
        </div>
        <div className="col-md-6 sponsor_hero_img_container">
          <img src="./hero_img.png" alt="racing_img" className='sponsor_hero_racer' />
        </div>
      </div>
      <img src="./hero_banner.png" alt="banner" className='banner' />
    </div>
  )
}

export default Hero

