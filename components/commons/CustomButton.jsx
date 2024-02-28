import React from "react";
import Link from "next/link";

const CustomButton = ({text,style,link}) => {
  return <Link className={style} href={link}>
      {text}
  </Link>;
};

export default CustomButton;
