import React from 'react'
import CheveronTxt from '../cheveronTxt'

const Partenariat = () => {
    const Array=["Vous bénéficierez d'une publicité et d'une communication valorisante axées sur le sport et le soutien à un jeune athlète.", "Nous vous associons aux compétitions auxquelles je participe, permettant ainsi une communication étroite. Cela inclut la prise de photographies lors des événements, mettant en avant votre marque ou entreprise.","Nous créons pour vous des opportunités de \"networking\" en établissant des liens avec mes autres sponsors, contacts, ainsi qu'avec de nombreux acteurs présents lors des compétitions et événements sportifs.","Nous créons des expériences uniques avec des événements sur mesure : journée en piste, baptême automobile à mes côtés, essais sur un simulateur professionnel, coaching personnalisé en pilotage.Du sur-mesure selon vos désirs et intérêts."]
  return (
    <div className='container-fluid partenariat'>
        <div className="row h-100">
            <div className="col-md-7 text-light partenariat-data">
                <p className="partenariat-titre text-uppercase termina f32 lh-base text-light">Partenariat Gagnant</p>
                {Array.map((item, idx) => {
                   return <CheveronTxt item={item} key={idx} />;
                 })
                }
                <div className="prix d-flex gap-5 my-5">
                    <div>
                        <span className='text-yellow termina f32 fw-bolder'> 100.000 &euro;</span>
                        <p className='manrope f16 fw-medium'>Prix de la saison</p>
                    </div>
                    <div>
                        <span className='text-yellow termina f32 fw-bolder'>500 &euro;</span>
                        <p className='manrope f16 fw-medium'>Ticket d'entrée</p>
                    </div>
                </div>
            </div>
            <div className="col-md-5"><img src="./racing_suit.png" alt="" className="racing-suit" /></div>
        </div>
    </div>
  )
}

export default Partenariat