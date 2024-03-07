import React from 'react'
import CheveronTxt from '../cheveronTxt';
import CustomButton from '../CustomButton';

const Majeur = () => {
    const Array1=["Visibilité par le biais de supports de communication","Page dédiée sur le site internet","Activation sur les réseaux sociaux","Kit média","Evénement de marque et pack sur mesure","Logotisation et visibilité sur les Equipements."]
    const Array2=["Visibilité par le biais de supports de communication","Page dédiée sur le site internet","Activation sur les réseaux sociaux"]
  return (
    <div className='container-fluid partenariat my-5 d-flex gap-3 d-flex aic jcc'>
        <div className="col-md-4 bg-light p-4 h-75 d-flex flex-column jcsb">
            <div>
                <span className="helmet-container form-check form-check-inline"><img src="./helmet.png" alt="hemlet" className="helmet" /></span>
                <p className='mb-5 text-noir text-uppercase form-check form-check-inline termina f32 lh-sm fw-bold p-1 '>Sponsor majeur</p>
            </div>
            {Array1.map((item, idx) => 
                {
                   return <CheveronTxt item={item} key={idx} />;
                 })
            }
            <CustomButton text="DEVENIR SPONSOR MAJEUR" link="#" style="bg-yellow border-0 p-3 w-100 " />
        </div>
        <div className="transparent col-md-4  p-4 h-75 text-light">
            <p className='mb-5  text-uppercase form-check form-check-inline termina f32 lh-sm fw-bold p-1 '>Sponsor</p>
            {Array2.map((item, idx) => 
                {
                   return <CheveronTxt item={item} key={idx} />;
                 })
            }
        </div>
       
    </div>
  )
}

export default Majeur