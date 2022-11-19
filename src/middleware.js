import { NextResponse } from "next/server";

const validadeMiddlewareCookies = (req) => {
    const sessionID = req.cookies.get('connect.sid').value
    console.log(sessionID)
    return sessionID ? ({
        Cookie: `connect.sid=${sessionID}`
    }) : false
}

export async function middleware(req) {
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        console.log('middleware: dashboard');
        const headers = validadeMiddlewareCookies(req)
        const url = req.nextUrl.clone()
        url.pathname = '/'
        if (!headers) return NextResponse.redirect(url)
        url.pathname = '/dashboard'
        const id = req.nextUrl.searchParams.get('id')
        //console.log(req.nextUrl.searchParams.)
        //if (!req.nextUrl.searchParams) return NextResponse.redirect(url)

    }
}