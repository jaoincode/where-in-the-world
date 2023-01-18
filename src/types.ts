export type filterOptions =
  | "all"
  | "america"
  | "africa"
  | "asia"
  | "oceania"
  | "antarctica";

export type countryType = {
  capital: string;
  flags: { png: string; svg: string };
  name: string;
  population: number;
  region: string;
};
