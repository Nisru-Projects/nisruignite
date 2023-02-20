import { HydrationRoot } from '@microeinhundert/radonis'
import Navbar from 'Components/islands/Navbar.island'
import type { ReactNode } from 'react'

interface BaseLayoutProps {
  children?: ReactNode;
}

function BaseLayout ({ children }: BaseLayoutProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HydrationRoot>
        <Navbar />
      </HydrationRoot>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 lg:pl-64">
          <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 md:px-8">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BaseLayout }
