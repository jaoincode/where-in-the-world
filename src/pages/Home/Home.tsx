import { useEffect, useState } from "react";

import { countryType, filterOptions } from "../../types";

function Home() {
  const [countries, setCountries] = useState<countryType[] | null>([]);
  const [searchCountries, setSeachCountries] = useState<countryType[] | null>(
    []
  );
  const [filter, setFilter] = useState<filterOptions>("all");
  const [search, setSearch] = useState("");

  const fetchCountries = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countriesJson = await data.json();
    setCountries(countriesJson);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (search)
      setSeachCountries(
        countries &&
          countries.filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
      );
  }, [search]);

  return (
    <div className="max-w-sm md:max-w-6xl p-7 md:p-10 mx-auto">
      <div className="flex justify-between flex-col gap-4 px-3 md:flex-row md:gap-0 md:px-0">
        <input
          type="text"
          className="bg-white dark:bg-slate-700 w-full md:w-72 h-10 border-none rounded-sm shadow-sm dark:text-white text-sm font-semibold p-4 select-none outline-none opacity-90 focus:opacity-100 transition-opacity"
          placeholder="Search for a country..."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
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
