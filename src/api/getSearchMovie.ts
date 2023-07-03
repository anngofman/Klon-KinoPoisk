
const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    // 'X-API-KEY': `TTKM1MJ-PAT4XAG-QESPA85-Z5D7SC0`
    // 'X-API-KEY': `P34T5CZ-X08M6CN-GDN58BG-HWRT0TP`
    'X-API-KEY': `4N1CA9Z-ZGX4H3Z-PYEG9YZ-894X7D9`
  }
}


export const getSearchMovies = async (limit: number, page: number, search?: string) => {
  const url = `https://api.kinopoisk.dev/v1.2/movie/search?page=${page}&limit=${limit}&query=${search}`

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