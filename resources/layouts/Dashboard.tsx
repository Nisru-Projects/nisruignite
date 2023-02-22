import { HydrationRoot } from '@microeinhundert/radonis'
import Sidebar from 'Components/islands/Sidebar.island'
import type { ReactNode } from 'react'
import { BaseLayout } from './Base'

export interface DashboardLayoutProps {
  children?: ReactNode;
  user: {
    name: string
    avatarURL: string
    isAdmin: boolean
  }
}

function DashboardLayout ({ children, user }: DashboardLayoutProps) {
  return (
    <BaseLayout>
      <HydrationRoot>
        <Sidebar isAdmin={user.isAdmin} />
      </HydrationRoot>
      <div className="p-4 sm:ml-64 dark:bg-gray-900 min-h-screen">
        <main>{children}</main>
      </div>
    </BaseLayout>
  )
}

export { DashboardLayout }
