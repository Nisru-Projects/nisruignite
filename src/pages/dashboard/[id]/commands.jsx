import { DashboardLayout } from "../../../components/layouts/dashboard"

const CommandsPage = () => {
    return (
        <div className="page">
            Guild Commands Page
        </div>
    )
}

CommandsPage.getLayout = function(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default CommandsPage