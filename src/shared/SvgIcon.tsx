type SvgIconProps = {
  width: number;
  height: number;
  id: string;
  className?: string;
};

export default function SvgIcon({
  width,
  height,
  id,
  className = "",
}: SvgIconProps) {
  return (
    <svg width={width} height={height} fill="red" className={`${className} [&_path]:fill-current`}>
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}
