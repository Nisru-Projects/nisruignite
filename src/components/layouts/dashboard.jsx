import { Appbar } from "../misc/Appbar";
import { Sidebar } from "../misc/Sidebar";
import styles from '../misc/index.module.scss'

export function DashboardLayout({ children }) {
    return (
        <>
            <Sidebar />
            <div className={styles.layout}>
                <Appbar/>
                <>{children}</>
            </div>
        </>
    )
}