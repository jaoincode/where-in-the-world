export type filterOptions =
  | "all"
  | "americas"
  | "africa"
  | "asia"
  | "oceania"
  | "antarctic"
  | "europe";

export type countryType = {
  capital: string;
  flags: { png: string; svg: string };
  name: {
    common: string;
  };
  population: number;
  region: string;
};
