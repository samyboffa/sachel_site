import React from 'react'
import sponsorsData from '@/data/sponsorsData'
import CustomButton from '../commons/CustomButton'

const Sponsors = () => {
  return (
    <div className="container my-5 text-center">
        <h1 className="f48 text-uppercase ">mes partenaires</h1>
        <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
            {
                sponsorsData.map((sponsors,idx)=>{
                return(
                    <div  key={idx}>
                        <img src={sponsors.imgUrl} alt={sponsors.imgDesc} />
                    </div>
                )
                })
            }
        </div>
        <CustomButton style="btn bg-yellow btn-outline-success text-left" text="DEVENIR SPONSOR" link="/sponsors"/>
    </div>
    
  )
}

export default Sponsors