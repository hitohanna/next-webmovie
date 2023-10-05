import axios from "axios"

const apiKey = process.env.NEXT_PUBLIC_API_KEY
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export async function getMoviesLists(page: number) {

    return axios.get(`${baseUrl}/movie/popular?&api_key=${apiKey}&page=${page}`).then(res => res.data)
    // return axios.get(`${baseUrl}/movie/popular?&api_key=${apiKey}&page=1`).then(res => res.data)

}