import { DashboardLayout } from "../../../components/layouts/dashboard"

const CommandsPage = () => {
    return (
        <div className="page">
            Commands Page
        </div>
    )
}

CommandsPage.getLayout = function(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default CommandsPage