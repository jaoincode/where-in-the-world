import { useEffect, useState } from "react";

type filterOptions =
  | "all"
  | "america"
  | "africa"
  | "asia"
  | "oceania"
  | "antarctica";

function Home() {
  const [countries, setCountries] = useState<any>([]);
  const [filter, setFilter] = useState<filterOptions>("all");

  return (
    <div className="max-w-sm md:max-w-6xl p-7 md:p-10 mx-auto">
      <div className="flex justify-between flex-col gap-4 px-3 md:flex-row md:gap-0 md:px-0">
        <input
          type="text"
          className="bg-white dark:bg-slate-700 w-full md:w-72 h-10 border-none rounded-sm shadow-sm dark:text-white text-sm font-semibold p-4 select-none outline-none opacity-90 focus:opacity-100 transition-opacity"
          placeholder="Search for a country..."
        />
        <select
          id="countries"
          className="w-full md:w-40  h-10 text-sm font-semibold opacity-90 focus:opacity-100 bg-white dark:bg-slate-700 dark:text-white outline-none px-4 rounded-sm"
          name="regionFilter"
          value={filter}
          onChange={({ target }) => setFilter(target.value as filterOptions)}
        >
          <option value="all" disabled>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="america">America</option>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="oceania">Oceania</option>
          <option value="antarctica">Antarctica</option>
        </select>
      </div>
    </div>
  );
}

export default Home;
