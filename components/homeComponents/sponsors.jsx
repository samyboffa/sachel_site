import React from 'react'
import sponsorsData from '@/data/sponsorsData'
import CustomButton from '../commons/CustomButton'

const Sponsors = () => {
  return (
    <div className="sponsor_section">
        <h1 className="sponsor_title">mes partenaires</h1>
        <div className="sponsor_div dfr jcc">
            {
                sponsorsData.map((sponsors,idx)=>{
                return(
                    <div className="single_sponsor" key={idx}>
                        <img src={sponsors.imgUrl} alt={sponsors.imgDesc} />
                    </div>
                )
                })
            }
        </div>
        <CustomButton text="DEVENIR SPONSOR" style="sponsorBtn" link="/contact"/>
    </div>
    
  )
}

export default Sponsors