export interface CharactersData {
  info: PageInfo,
  results: ResultData[]
}
export interface PageInfo {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null,
}

export interface ResultData {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: LinkData,
  location: LinkData,
  image: string,
  episode: string[],
  url: string,
  created: string
}

interface LinkData {
  name: string,
  url: string
}