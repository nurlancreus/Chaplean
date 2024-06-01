import { Link } from "react-router-dom";
import { SvgIcon } from ".";

type LogoProps = {
  variant: "header" | "footer";
};
export default function Logo({ variant }: LogoProps) {
  const w = variant === "header" ? 175 : 218;
  const h = variant === "header" ? 32 : 40;

  return (
    <Link to={"/"}>
      <SvgIcon id="logo" width={w} height={h} />
    </Link>
  );
}
