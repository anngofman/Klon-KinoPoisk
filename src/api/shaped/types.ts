export type MyResponseType<T> = {
  docs: T
  page: number
}

export type RatingType = {
  kp: number
  imdb: number
}

export type PosterType = {
  url: string
}

export type NameType = {
  name: string
}

export type PremiereType = {
  world: string
}

export type PersonType = {
  name: string
  enProfession: string
}

export type SimilarMovieType = {
  id: number
  name: string
  poster: PosterType
}

export type BudgetType = {
    value: number,
    currency: string
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
  budget: BudgetType
  countries: NameType[]
  persons: PersonType[]
  similarMovies: SimilarMovieType[]
  favorites: boolean
}

// Producers: []
// actors: []
// director: []
// writers: []

export type TypeMovies = Pick<TypeSingleMovie, 'id' | 'name' | 'genres' | 'poster' | 'rating' | 'favorites'>