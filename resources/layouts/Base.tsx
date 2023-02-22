import { HydrationRoot } from '@microeinhundert/radonis'
import Navbar from 'Components/islands/Navbar.island'
import type { ReactNode } from 'react'

interface BaseLayoutProps {
  children?: ReactNode;
}

function BaseLayout ({ children }: BaseLayoutProps) {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col dark dark:bg-gray-900">
      <HydrationRoot>
        <Navbar />
      </HydrationRoot>
      <main>{children}</main>
    </div>
  )
}

export { BaseLayout }
