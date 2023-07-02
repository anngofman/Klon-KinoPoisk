import { TypeMovies } from "./shaped/types"

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    // 'X-API-KEY': `TTKM1MJ-PAT4XAG-QESPA85-Z5D7SC0`
    'X-API-KEY': `P34T5CZ-X08M6CN-GDN58BG-HWRT0TP`
    
  }
}


export const getMovies = async (limit: number, page: number, search?: string) => {
  const url = `https://api.kinopoisk.dev/v1.3/movie?page=${page}&limit=${limit}${search ? '&search=' + search : ''}`

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
    const result:TypeMovies[] = await response.json()
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