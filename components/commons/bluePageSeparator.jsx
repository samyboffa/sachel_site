import React from 'react'

const BluePageSeparator = () => {
  return (
    <div className='blueSeparator '>
        <div className="container d-flex blueSeparator_container">
            <div className="data my-auto text-light ">
                <h5 className='data_title f32 fw-bold upCase mb-5'>saison 2024</h5>
                <p className="data_text lh-lg f16 fw-medium mb-5 ">La saison 2024 sera cruciale pour Sachel ! Cette année marquera ses essais en Formule 4, Ligier JS2R, GT, et son immersion dans l'aventure Feed Racing F4. Attendez-vous à des moments palpitants sur les circuits, où il repoussera les limites de la vitesse et de la précision. Suivez son ascension, mêlant compétitions réelles et virtuelles, pour une saison exceptionnelle pleine de nouveaux défis et de succès.</p>
                <button className="sectionBtn bg-yellow fw-bold">EN SAVOIR PLUS</button>
            </div>
            <div className="img_container">
                <img src="./home_sep_img.png" alt="sep_img" className="separator_img" />
            </div>
        </div>
    </div>
  )
}

export default BluePageSeparator