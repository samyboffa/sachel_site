import React from 'react'



const InfoSection = (props) => {
  return (
    <div className="container">
      <section className="row d-flex container section_container " >
        <div className=" img_container d-flex justify-content-center"><img src={props.imgUrl} alt="sachel_pilote" className="section_img" /></div>
        <div className="col-md-1 section_description d-flex flex-column justify-content-end h-100 my-auto text-noir ">
            <h5 className="section_title fw-bold mb-4">{props.title}</h5>
            <p className="section_text lh-lg fw-medium mb-3  ">{props.txt}</p>
            <button className={props.btnTxt?"sectionBtn bg-light-subtle fw-bolder ":"hidden"} >{props.btnTxt}</button>
        </div>
    </section>
    </div>
  )
}

export default InfoSection