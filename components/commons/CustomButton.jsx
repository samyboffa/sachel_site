import React from "react";
import Link from "next/link";

const CustomButton = ({text,link,style}) => {
  return (
    <button className={style}>
      <Link className='nav-link' href={link}>
       {text}
      </Link>
    </button>
  )
};

export default CustomButton;
