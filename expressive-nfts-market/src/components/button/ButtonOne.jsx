import React from 'react';
import Link from "next/link"



const ButtonOne = () => {
  return (
        <Link href='/contact' className="btn-action">
            Join Now
        </Link>
  );
}

export default ButtonOne;