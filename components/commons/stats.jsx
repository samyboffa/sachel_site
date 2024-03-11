import React from 'react'

const Stats = ({num1,num2,num3,txt1,txt2,txt3}) => {
  return (
    <div className='container stats_div my-5'>
        <div className="row h-100 text-center  ">
            <div className="col-md-4 col-sm-12 jcsb d-flex flex-column align-items-center "><span className='f56 fw-bold stat_span'>{num1}</span><p className='stat_txt'>{txt1}</p></div>
            <div className="col-md-4 col-sm-12 d-flex flex-column align-items-center "><span className='stat_span text-yellow f56 fw-bold h-60'>{num2}</span><p className='stat_txt h-100'>{txt2}</p></div>
            <div className="col-md-4 col-sm-12 jcsb d-flex flex-column align-items-center "><span className='stat_span f56 fw-bold h-60'>{num3}</span><p className='stat_txt h-100'>{txt3}</p></div>
        </div>
    </div>
  )
}

export default Stats