import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

import { countryType } from "../../types";

import Loading from "../../components/Loading";

function Country() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<countryType[] | null>(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const getCountryInfo = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const countryJson = await data.json();

    setCountry(
      countryJson.filter((country: countryType) => country.name.common === id)
    );

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCountryInfo();
  }, [id]);

  if (loading) return <Loading />;
  if (!loading && country)
    return (
      <div className="max-w-sm md:max-w-6xl p-7 md:p-10 mx-auto min-h-screen">
        <div className="mt-20">
          <button
            className="font-semibold text-lg w-32 md:w-40 h-12 p-3 bg-white rounded-md shadow-sm hover:-translate-y-1 transition-transform dark:text-white dark:bg-slate-600 flex items-center justify-center "
            onClick={() => navigate("/")}
          >
            <AiOutlineArrowLeft />
            Back
          </button>
          <div className="flex flex-col md:flex-row md:justify-center mt-10 md:mt-28 min-w-full gap-10 ">
            <img src={country[0].flags.png} alt="country flag" />
            <div className="w-full md:w-5/6 pl-5 text-left relative">
              <h1 className="font-bold text-2xl mb-3 dark:text-white">
                {country[0].name.common}
              </h1>
              <ul className="max-h-full md:max-h-9 dark:text-white">
                <li>
                  <span className="font-semibold text-base">Population: </span>
                  {country[0].population}
                </li>
                <li>
                  <span className="font-semibold text-base">Region: </span>
                  {country[0].region}
                </li>
                <li>
                  <span className="font-semibold text-base">Sub Region: </span>
                  {country[0].subregion}
                </li>
                <li>
                  <span className="font-semibold text-base">Capital: </span>
                  {!country[0].capital
                    ? "?"
                    : Array.isArray(country[0].capital)
                    ? country[0].capital[0]
                    : country[0].capital}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Country;
