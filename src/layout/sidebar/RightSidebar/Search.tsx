import { SvgIcon } from "@/shared";
import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = query.trim();
    if (!text) return;

    console.log(text);
    setQuery("");
  };

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <form
      id="searchMenu"
      name="searchMenu"
      onSubmit={handleSubmitSearch}
      className="relative"
    >
      <button className="absolute left-4 top-1/2 -translate-y-1/2">
        <SvgIcon width={16} height={16} id="search" />
      </button>
      <input
        type="text"
        id="search"
        name="search"
        value={query}
        onChange={handleChangeQuery}
        placeholder="Search"
        className="w-full rounded-full bg-secondary-blue py-2 ps-9 font-poppins text-sm text-white-blue placeholder:text-sm placeholder:text-white-blue focus:outline-transparent focus:ring-1 focus:ring-primary-blue focus-visible:outline-transparent focus-visible:ring-1 focus-visible:ring-primary-blue"
      />
    </form>
  );
}
