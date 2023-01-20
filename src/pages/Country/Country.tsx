import { useParams, useNavigate } from "react-router-dom";

import { AiOutlineArrowLeft } from "react-icons/ai";

function Country() {
  const { id } = useParams();

  const navigate = useNavigate();

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
        <div className="flex flex-col md:flex-row mt-10 md:mt-28  min-w-full gap-10 ">
          <img
            src="https://images.unsplash.com/photo-1515071970049-680dbd2a2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            className="w-full h-full md:w-5/6 md:h-96"
            alt="country flag"
          />
          <div className="w-full md:w-5/6 pl-5 text-left relative">
            <h1 className="font-bold text-2xl mb-3 dark:text-white">Belgium</h1>
            <ul className="max-h-full md:max-h-9 dark:text-white">
              <li>
                <span className="font-semibold text-base">Native Name: </span>
                Belgie
              </li>
              <li>
                <span className="font-semibold text-base">Population: </span>
                1111111
              </li>
              <li>
                <span className="font-semibold text-base">Region: </span>
                Europe
              </li>
              <li>
                <span className="font-semibold text-base">Sub Region: </span>
                Western Europe
              </li>
              <li>
                <span className="font-semibold text-base">Capital: </span>
                Brussels
              </li>
              <li>
                <span className="font-semibold text-base">
                  Top Level Domain:
                </span>
                .be
              </li>
              <li>
                <span className="font-semibold text-base">Currencies:</span>
                Euro
              </li>
              <li>
                <span className="font-semibold text-base">Languages:</span>
                Dutch, French, German
              </li>
            </ul>
            <div className="relative md:absolute -bottom-7 flex flex-col md:flex-row">
              <p className="font-semibold mr-5 mb-3 md:mb-0 dark:text-white">
                Border Countries:{" "}
              </p>
              <ul className="flex  gap-4 mb-10">
                <li className="bg-white dark:bg-slate-600 dark:text-white min-w-24 p-3 h-7 flex justify-center  items-center shadow-sm text-sm font-semibold">
                  France
                </li>
                <li className="bg-white dark:bg-slate-600 dark:text-white min-w-24 p-3 h-7 flex justify-center items-center  shadow-sm text-sm font-semibold">
                  Germany
                </li>
                <li className="bg-white dark:bg-slate-600 dark:text-white min-w-24 p-3 h-7 flex justify-center  items-center shadow-sm text-sm font-semibold">
                  Netherlands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
