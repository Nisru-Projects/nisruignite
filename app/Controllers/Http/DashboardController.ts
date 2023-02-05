import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dashboard from 'App/Components/pages/Dashboard'

export default class DashboardController {
    public index({ react, session }: HttpContextContract) {
        return react.render(Dashboard, { name: session.get('user').nickName })
    }
}
