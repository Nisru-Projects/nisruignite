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
      <main>{children}</main>
    </BaseLayout>
  )
}

export { DashboardLayout }
