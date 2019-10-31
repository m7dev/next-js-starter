import React from 'react';
import Link from 'next/link';


const NextLink = (props) => {
  const { to, children, className, style } = props;

  return (
    <Link href={to} as={`${process.env.BACKEND_URL}${to}`}>
      <a className={className} style={style}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
