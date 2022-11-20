import { NextResponse } from "next/server";
import { fetchValidGuild } from "./utils/api";

const validadeMiddlewareCookies = (req) => {
    const sessionID = req.cookies.get('connect.sid').value
    return sessionID ? ({
        Cookie: `connect.sid=${sessionID}`
    }) : false
}

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/dashboard/')) {
        const headers = validadeMiddlewareCookies(req)
        const url = req.nextUrl.clone()
        url.pathname = '/'
        if (!headers) return NextResponse.redirect(url)
        const id = req.nextUrl.searchParams.get('id')
        const response = await fetchValidGuild(id, headers)
        // Redirect to 404
        url.pathname = '/'
        return response.status === 200 ? NextResponse.next() : NextResponse.redirect(url)
    }
}