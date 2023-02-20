import { HydrationRoot } from '@microeinhundert/radonis'
import Sidebar from 'Components/islands/Sidebar.island'
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
      <HydrationRoot>
        <Sidebar />
      </HydrationRoot>
      <p>Hello from Adonis React! {user.name}</p>
      <br />
      <a href='/'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Home
        </button>
      </a>
    </BaseLayout>
  )
}

export { Dashboard }
