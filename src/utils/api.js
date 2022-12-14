import axios from "axios"
import { validadeCookies } from "./helpers"

const API_URL = 'http://localhost:3001/api'

export const fetchMutualGuilds = async (context) => {
    const headers = validadeCookies(context)
    if (!headers) return { redirect: { destination: '/' } }
    try {
        const res = await axios.get(`${API_URL}/guilds`, { headers })
        if (!res.data) return { redirect: '/' }
        const data = res.data
        return { props: { guilds: data.mutualGuilds } }
    } catch (error) {
        console.log(error)
        return { redirect: '/' }
    }
}

export const fetchValidGuild = async (id, headers) => { 
    return fetch(`${API_URL}/guilds/${id}/permissions`, { headers });
}

export const fetchAdminPermissions = async (headers) => { 
    return fetch(`${API_URL}/admin`, { headers });
}