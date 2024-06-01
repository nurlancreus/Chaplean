type ToggleBtnProps = {
  isMenuToggled: boolean;
  onToggleHeaderNav: () => void;
};

export default function ToggleBtn({
  isMenuToggled,
  onToggleHeaderNav,
}: ToggleBtnProps) {
  return (
    <button
      className={`${isMenuToggled ? "toggled" : "not-toggled"} toggle-btn z-50 flex h-10 w-10 flex-col items-center justify-center gap-1 px-1 md:hidden`}
      onClick={onToggleHeaderNav}
    >
      <span className="block h-1 w-full rounded-lg bg-primary-blue"/>
      <span className="block h-1 w-full rounded-lg bg-primary-blue"/>
      <span className="block h-1 w-full rounded-lg bg-primary-blue"/>
    </button>
  );
}
