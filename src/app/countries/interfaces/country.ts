export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode: PostalCode;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  '2018': number;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Translations {
  ara: Est;
  bre: Est;
  ces: Est;
  cym: Est;
  deu: Est;
  est: Est;
  fin: Est;
  fra: Est;
  hrv: Est;
  hun: Est;
  ita: Est;
  jpn: Est;
  kor: Est;
  nld: Est;
  per: Est;
  pol: Est;
  por: Est;
  rus: Est;
  slk: Est;
  spa: Est;
  srp: Est;
  swe: Est;
  tur: Est;
  urd: Est;
  zho: Est;
}

export interface Languages {
  est: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Currencies {
  EUR: EUR;
}

export interface EUR {
  name: string;
  symbol: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

export interface NativeName {
  est: Est;
}

export interface Est {
  official: string;
  common: string;
}