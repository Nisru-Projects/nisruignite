// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Dashboard } from 'Views/Dashboard'

export default class DashboardController {
  public index ({ radonis, session }: HttpContextContract) {
    const userSession = session.get('user')

    const user = {
      name: userSession?.name,
      avatarURL: userSession?.avatarURL,
    }

    return radonis.render(Dashboard, { user })
  }
}
