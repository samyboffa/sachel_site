import React from 'react'
import sponsorsData from '@/data/sponsorsData'
import CustomButton from './CustomButton'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sponsors = ({data}) => {
  return (
    <div className="container my-5 text-center">
        <h1 className="f48 text-uppercase ">mes partenaires</h1>
        <div className="row d-flex flex-wrap my-5">
            {
                sponsorsData.map((sponsors,idx)=>{
                return(
                    <div  key={idx} className='col-md-4 col-sm-2 mb-5 '>
                        <img src={sponsors.imgUrl} alt={sponsors.title} className='w-100 mb-5'/>
                        {
                            data?<div className="sonpsor_details manrope">
                            <p className='text-uppercase fw-bolder '>{sponsors.title}</p>
                            <p>{sponsors.subTitle}</p>
                            <p>{sponsors.description}</p>
                            <div className="sponsors_social_links d-flex gap-2 ">
                                <a href={sponsors.instaLink}><FontAwesomeIcon className='faIcon' icon={faInstagram}/></a>
                                <a href={sponsors.linkedInLink}><FontAwesomeIcon className='faIcon' icon={faLinkedin} /></a>
                                <a href={sponsors.tiktokLink}><FontAwesomeIcon className='faIcon' icon={faTiktok} /></a>
                                <a href={sponsors.fbLink}><FontAwesomeIcon className='faIcon' icon={faSquareFacebook} /></a>
                                <a href={sponsors.youtubeLink}><FontAwesomeIcon className='faIcon' icon={faYoutube} /></a>
                            </div>
                            <div className="sponsor_webpage">
                                <a href={sponsors.weblink}></a>
                            </div>
                        </div> 
                        :
                        null
                        }
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