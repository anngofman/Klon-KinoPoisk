export type MyResponseType<T>={
  total:number
  docs: T
}

type RatingType = {
  kp: number
  imdb: number
}

type PosterType = {
  url: string
}

type NameType = {
  name: string
}

type PremiereType = {
  world: string
}

type PersonType = {
  name: string
  enProfession: string
}

type SimilarMovieType = {
  id: number
  name: string
  poster: PosterType
}

export type TypeSingleMovie = {
  id: number
  name: string
  poster: PosterType
  genres: NameType[]
  movieLength: number
  description: string
  rating: RatingType
  year: number
  premiere: PremiereType
  boxOffice: {}
  countries: NameType[]
  persons: PersonType[]
  similarMovies: SimilarMovieType[]
  favorites: boolean
}

// Producers: []
// actors: []
// director: []
// writers: []

export type TypeMovies = Pick <TypeSingleMovie, 'id' | 'name' | 'genres'  | 'poster' | 'rating' | 'favorites'>