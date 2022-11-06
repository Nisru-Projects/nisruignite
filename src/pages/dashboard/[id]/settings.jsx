import { DashboardLayout } from "../../../components/layouts/dashboard"

const SettingsPage = () => {
    return (
        <div className="page">
            Guild Settings Page
        </div>
    )
}

SettingsPage.getLayout = function(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default SettingsPage