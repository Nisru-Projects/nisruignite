import { DashboardLayout } from "../../../components/layouts/dashboard"

const DashboardPage = () => {
    return (
        <div className="page">
            Admin Page
        </div>
    )
}

DashboardPage.getLayout = function(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default DashboardPage