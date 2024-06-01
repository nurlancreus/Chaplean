import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  as: "h1" | "h3" | "h4";
  className?: string;
  id?: string;
};

const headingStyles = {
  h1: "text-4xl font-semibold text-white",
  h3: "text-2xl font-semibold text-white",
  h4: "text-lg font-medium text-gray-white",
};

export default function Heading({
  children,
  as,
  className = "",
  id = "",
}: HeadingProps) {
  const HeadingTag = as;
  const classes = headingStyles[as];

  return (
    <HeadingTag id={id} className={`${classes} ${className}`}>
      {children}
    </HeadingTag>
  );
}
