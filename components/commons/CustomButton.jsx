import React from "react";
import Link from "next/link";

const CustomButton = ({text,link}) => {
  return (
    <button className="btn custBtn bg-yellow col-md-3 btn-outline-success text-left">
      <Link className='nav-link ' href={link}>
      {text}
  </Link>;
    </button>
  )
};

export default CustomButton;
