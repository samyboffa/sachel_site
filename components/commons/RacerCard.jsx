import React from 'react'

const RacerCard = ({imgUrl,name, role}) => {
  return (
        
            <div className="col-xs-12 col-md-4 ">
                <img src={imgUrl} alt="romain" className="img-fluid" />
                <p className="fw-600 mt-3 mb-2">{name}</p>
                <p className="">{role}</p>
            </div>
       
    
  )
}

export default RacerCard