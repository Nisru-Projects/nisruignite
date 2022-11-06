import axios from "axios"
import { validadeCookies } from "../helpers"

const API_URL = 'http://localhost:3001/api'

export const fetchMutualGuilds = async (context) => {
    const headers = validadeCookies(context)
    if (!headers) return { redirect: { destination: '/' } }
    try {
        const { data } = await axios.get(`${API_URL}/guilds`, { headers })
        return { props: { guilds: data.mutualGuilds } }
    } catch (error) {
        console.log(error)
        return { redirect: '/' }
    }
}