import Route from '@ioc:Adonis/Core/Route'

import WithProps from 'App/Components/pages/WithProps'

Route.get('/', 'TestReact.index')

Route.get('/with-props', async ({ react }) => react.render(WithProps, { name: 'my friend' }))

/*
Route.get('/', async ({ view }) => {
    return view.render('home')
})

Route.get('/dashboard', 'DashboardController.index').middleware('auth')

Route.get('/account/create', 'AccountController.create').middleware('auth')

Route.get('/me', async ({ response, session }) => {
    const id = session.get('user').id
    return response.redirect(`/user/${id}`)
})

Route.get('/user/:id', async ({ view, params }) => {
    return view.render('user', { id: params.id })
})

Route.get('/login', 'AuthController.login')

Route.get('/logout', 'AuthController.logout')

Route.get('/discord/callback', 'AuthController.callback')
*/
