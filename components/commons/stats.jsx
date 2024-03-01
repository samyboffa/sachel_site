import React from 'react'

const Stats = () => {
  return (
    <div className='container stats_div '>
        <div className="row h-100 text-center  ">
            <div className="col-md-5 jcsb d-flex flex-column align-items-center "><span className='f56 fw-bold stat_span'>3</span><p className='stat_txt'>Championnats : Essais en course d’endurance, Karting & Sim racing</p></div>
            <div className="col-md-3  d-flex flex-column align-items-center "><span className='stat_span text-yellow f56 fw-bold h-60'>+80</span><p className='stat_txt h-100'>Courses réalisées</p></div>
            <div className="col-md-4 jcsb d-flex flex-column align-items-center "><span className='stat_span f56 fw-bold h-60'>4 ans</span><p className='stat_txt h-100'>D’expérience dans le karting</p></div>
        </div>
    </div>
  )
}

export default Stats