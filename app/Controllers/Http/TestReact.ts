import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Index from 'App/Components/pages/Index'

export default class TestReact {
    public index({ react }: HttpContextContract) {
        return react.render(Index)
    }
}
