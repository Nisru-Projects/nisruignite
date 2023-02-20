import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import checkPermissions from 'App/Utils/checkPermissions'

export default class Admin {
  public async handle ({ response, session }: HttpContextContract, next: () => Promise<void>) {
    const user = session.get('user')
    const isAdmin = await checkPermissions(user.id, ['admin.*'])
    if (!isAdmin) {
      response.redirect().toRoute('/')
      return
    }
    await next()
  }
}
