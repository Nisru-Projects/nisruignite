import { DashboardLayout, DashboardLayoutProps } from 'Layouts/Dashboard'

function Ignite ({ user }: DashboardLayoutProps) {
  return (
    <DashboardLayout user={user}>
      <p className="text-2xl font-bold text-gray-400">
        Ignite :) {user.name}
      </p>
    </DashboardLayout>
  )
}

export { Ignite }
