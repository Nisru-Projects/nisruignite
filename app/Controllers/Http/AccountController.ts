import Database from '@ioc:Adonis/Lucid/Database'

export default class AccountController {
  public async create({ response, session }) {
    if (!session.get('account')) {
      Database.table('users')
        .insert({
          discord_id: session.get('user').id,
        })
        .then(() => {
          Database.from('users')
            .where('userid', session.get('user').id)
            .first()
            .then((account) => {
              session.put('account', account)
            })
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return response.redirect('/')
  }
}
