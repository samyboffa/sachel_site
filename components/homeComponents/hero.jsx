import React from 'react'

const Hero = () => {
  return (
    <div className='hero_container'>
      <div className="container h-100 d-flex">
         <div className="hero_data ">
              <h1 className="hero_title mb-2 f56 upCase">Sachel RotgE</h1>
              <h3 className="hero_subtitle mb-4 f32 text-yellow upCase">Pilote AUTOMOBILE</h3>
              <div className="hero_separator mb-4"></div>
              <div className="hero_text lh-lg mb-4 f16 fw-semibold ">Plongez dans l'univers auto de Sachel Rotgé - Le jeune prometteur du sport automobile qui a pour objectif d'unir nos forces sur les circuits prestigieux : ensemble, vers ma performance !</div>
              <h4 className="hero_bottom_text upCAse">EN ROUTE VERS UNE CARRIÈRE DE PILOTE PROFESSIONNEL !</h4>
         </div>
        <div className="hero_img_container d-flex"><img src="./hero_img.png" alt="racing_img" className='hero_img' /></div>
      </div>
      <img src="./hero_banner.png" alt="banner" className='banner' />
    </div>
  )
}

export default Hero