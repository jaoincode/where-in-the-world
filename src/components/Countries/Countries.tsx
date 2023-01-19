import { countryType } from "../../types";

import CountryCard from "./CountryCard";

function Countries({ countries }: { countries: countryType[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center  mt-10 min-h-screen bg-slate-50 dark:bg-slate-800 ">
      {countries.map((country) => (
        <CountryCard country={country} key={country.name.common} />
      ))}
    </div>
  );
}

export default Countries;
