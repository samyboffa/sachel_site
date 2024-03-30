import React from "react";
import sponsorsData from "@/data/sponsorsData";
import {
  faInstagram,
  faYoutube,
  faSquareFacebook,
  faTiktok,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DevenirSponsor from "./DevenirSponsor";

const Sponsors = ({ data, width }) => {
  return (
    <div className="container marginB-200 text-center">
      <p className="f32 text-uppercase termina600 margin-bottom-104 ">
        mes partenaires
      </p>
      <div className="row d-flex flex-wrap my-5">
        {sponsorsData.map((sponsors, idx) => {
          return (
            <div key={idx} className={`${width} col-xs-12 mb-5 mx-auto`}>
              <img
                src={sponsors.imgUrl}
                alt={sponsors.title}
                className="w-100 mb-5"
              />
              {data ? (
                <div className="sonpsor_details manrope">
                  <p className="text-uppercase manrope fw-700 ">
                    {sponsors.title}
                  </p>
                  <p className="manrope fw-500 op-50">{sponsors.subTitle}</p>
                  <p className="manrope fw-500">{sponsors.description}</p>
                  <div className="sponsors_social_links d-flex gap-2 ">
                    <a href={sponsors.instaLink}>
                      <FontAwesomeIcon className="faIcon" icon={faInstagram} />
                    </a>
                    <a href={sponsors.linkedInLink}>
                      <FontAwesomeIcon className="faIcon" icon={faLinkedin} />
                    </a>
                    <a href={sponsors.tiktokLink}>
                      <FontAwesomeIcon className="faIcon" icon={faTiktok} />
                    </a>
                    <a href={sponsors.fbLink}>
                      <FontAwesomeIcon
                        className="faIcon"
                        icon={faSquareFacebook}
                      />
                    </a>
                    <a href={sponsors.youtubeLink}>
                      <FontAwesomeIcon className="faIcon" icon={faYoutube} />
                    </a>
                  </div>
                  <div className="sponsor_webpage ">
                    <a href={`http://${sponsors.weblink}`} target="_blank">
                      {sponsors.weblink}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <DevenirSponsor style="bg-yellow" text="DEVENIR SPONSOR" />
    </div>
  );
};

export default Sponsors;
