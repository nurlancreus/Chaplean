import MenuItem from "./MenuItem";

type MenuSectionProps = {
  section: {
    label: string;
    list: {
      id: string;
      path: string;
      label: string;
      hasDropdown: boolean;
    }[];
  };
};

export default function MenuSection({ section }: MenuSectionProps) {
  return (
    <div>
      <h4 className="mb-2 px-3 text-white-blue">{section.label}</h4>
      <ul className="space-y-1 text-gray-1">
        {section.list.map((nav) => (
          <MenuItem key={nav.label} nav={nav} />
        ))}
      </ul>
    </div>
  );
}
