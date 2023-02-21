// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { Dashboard } from 'Views/Dashboard'
import { Ignite } from 'Views/Dashboard/Ignite'

export default class DashboardController {
  public index ({ radonis, session }: HttpContextContract) {
    const userSession = session.get('user')

    const user = {
      name: userSession?.name,
      avatarURL: userSession?.avatarURL,
      isAdmin: userSession?.isAdmin,
    }

    return radonis.render(Dashboard, { user })
  }
  public ignite ({ radonis, session }: HttpContextContract) {
    const userSession = session.get('user')

    const user = {
      name: userSession?.name,
      avatarURL: userSession?.avatarURL,
      isAdmin: userSession?.isAdmin,
    }

    return radonis.render(Ignite, { user })
  }
}
