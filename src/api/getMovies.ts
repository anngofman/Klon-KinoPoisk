import { TypeMovies } from "./shaped/types"

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    // 'X-API-KEY': `TTKM1MJ-PAT4XAG-QESPA85-Z5D7SC0`
    'X-API-KEY': `P34T5CZ-X08M6CN-GDN58BG-HWRT0TP`
    // 'X-API-KEY': `4N1CA9Z-ZGX4H3Z-PYEG9YZ-894X7D9`

  }
}
// 3/movie?sortField&sortType&page&limit&year&rating.kp&genres.name&countries.name

export const getMovies = async (limit: number, page: number, year?: string, rating?: string, genre?: string, countrie?: string, name?: string, sortField?: string) => {
  const url = `https://api.kinopoisk.dev/v1.3/movie?page=${page}&limit=${limit}${year ? '&year=' + year : ''}
  ${rating ? '&rating.kp=' + rating : ''}${genre ? '&genres.name=' + genre : ''}
  ${countrie ? '&countries.name=' + countrie : ''}
  ${name ? '&name=' + name : ''}
  ${sortField ? '&sortField=' + sortField : ''}`

  const request = new Request(url, options)

  try {
    const response = await fetch(request)
    const result = await response.json()
    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.massage
    }
  }
}

export const getTrendMovies = async (limit: number, page: number) => {
  const url = `https://api.kinopoisk.dev/v1.3/movie?page=${page}&limit=${limit}&top250=!null`

  const request = new Request(url, options)

  try {
    const response = await fetch(request)
    const result: TypeMovies[] = await response.json()
    return {
      ok: response.ok,
      status: response.status,
      data: result
    }
  } catch (error: any) {
    return {
      ok: false,
      status: 400,
      data: error.massage
    }
  }
} 