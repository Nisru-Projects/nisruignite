import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
    public async login({ ally }) {
        return ally.use('discord').redirect()
    }
    public async logout({ response, session }) {
        session.forget('user')
        session.forget('account')
        return response.redirect('/')
    }
    public async callback({ ally, response, session }) {
        const discord = ally.use('discord')

        if (discord.accessDenied()) {
            return response.redirect('/')
        }

        if (discord.stateMisMatch()) {
            return response.redirect('/')
        }

        if (discord.hasError()) {
            return discord.getError()
        }

        const user = await discord.user()

        const account = await Database.from('users').where('discord_id', user.id).first()

        session.put('user', user)
        session.put('account', account)

        return response.redirect().toRoute('/')
    }
}
