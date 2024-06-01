import { ReactNode } from "react";
import SvgIcon from "./SvgIcon";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  variant: "contact" | "download";
};

const styles = {
  contact:
    "rounded-full border border-transparent bg-primary-blue px-4 py-2 font-medium text-background-blue transition duration-200 hover:text-primary-blue hover:bg-transparent hover:border-primary-blue",
  download:
    "rounded-full bg-background-blue md:bg-transparent px-8 py-4 flex items-center gap-3 border border-transparent md:border-primary-blue transition duration-200 text-lg text-gray-2 font-medium hover:bg-primary-blue hover:text-secondary-blue hover:border-secondary-blue",
};

export default function Button({ children, variant }: ButtonProps) {
  if (variant === "contact") {
    return (
      <Link to="/" className={styles[variant]}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles[variant]}>
      <SvgIcon
        width={24}
        height={24}
        id="download"
        className="stroke-current"
      />
      {children}
    </button>
  );
}
