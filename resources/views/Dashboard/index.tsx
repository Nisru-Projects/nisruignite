import { BaseLayout } from 'Layouts/Base'

interface DashboardProps {
  user: {
    name: string
    avatarURL: string
  }
}

function Dashboard ({ user }: DashboardProps) {
  return (
    <BaseLayout>
      <p>Hello from Adonis React! {user.name}</p>
      <br />
      <a href='/'>
        <button>
          Home
        </button>
      </a>
    </BaseLayout>
  )
}

export { Dashboard }
