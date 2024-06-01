import { SvgIcon } from "@/shared";

export default function AppProfile() {
  return (
    <div className="flex items-center gap-2 rounded-xl bg-secondary-blue p-4 text-white">
      <img src="/images/avatar-placeholder.png" alt="avatar" />
      <div className="flex flex-col">
        <h3 className="font-medium">Chaplean App</h3>
        <p className="text-sm">Social media platform</p>
      </div>
      <button className="ms-auto block rounded-md bg-background-blue p-2">
        <SvgIcon width={11} height={7} id="chevron" />
      </button>
    </div>
  );
}
