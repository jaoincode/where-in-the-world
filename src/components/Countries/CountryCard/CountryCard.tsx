import React from "react";

import { countryType } from "../../../types";

function CountryCard({ country }: { country: countryType }) {
  const { name, region, capital, flags, population } = country;

  return (
    <div className="w-56 h-60 bg-white shadow-sm rounded-md dark:bg-slate-700 dark:text-white hover:scale-105 transition-transform cursor-pointer">
      <img
        src={flags.svg}
        alt={`${name.common} country flag`}
        className="w-full max-h-28 min-h-28 h-28 object-cover border rounded-t-md"
      />
      <div className="flex flex-col text-left p-4 ">
        <h2 className="font-bold text-base">{name.common}</h2>
        <ul>
          <li className="text-sm">
            <span className="font-semibold">Population:</span> {population}
          </li>
          <li className="text-sm">
            <span className="font-semibold">Region:</span> {region}
          </li>
          <li className="text-sm">
            <span className="font-semibold">Capital:</span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
