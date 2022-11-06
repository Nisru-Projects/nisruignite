export const validadeCookies = (ctx) => {
    const sessionID = ctx.req.cookies['connect.sid']
    return sessionID ? ({
        Cookie: `connect.sid=${sessionID}`
    }) : false
}