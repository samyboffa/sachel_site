import React from "react";
import Link from "next/link";

const CustomButton = ({ text, link, style }) => {
  return (
    <button className={`${style} border-0 p-3 manrope fw-800 customBtn`}>
      <Link className="yellowbTn manrope fw-800" href={link}>
        {text}
      </Link>
    </button>
  );
};

export default CustomButton;
