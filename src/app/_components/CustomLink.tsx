import Link from "next/link";
import React from "react";
interface ICustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Link
      href={href}
      className={`text-center rounded-lg text-white font-semibold py-2 hover:bg-violet-600 transition-all duration-200 ease-out bg-violet-500 block ${className}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
