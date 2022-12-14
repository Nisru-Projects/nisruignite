import Image from "next/image"

import { MdSpaceDashboard } from "react-icons/md"
import { BsTerminal } from "react-icons/bs"
import { FaWrench } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"

import styles from "./index.module.scss"
import { useRouter } from "next/router"

const routes = [
    {
        name: "Dashboard",
        getPath: (id) => `/dashboard/${id}`,
        icon: <MdSpaceDashboard size={24} />
    },
    {
        name: "Commands",
        getPath: (id) => `/dashboard/${id}/commands`,
        icon: <BsTerminal size={24} />
    },
    {
        name: "Settings",
        getPath: (id) => `/dashboard/${id}/settings`,
        icon: <FaWrench size={24} />
    },
]

export const Sidebar = () => {

    const router = useRouter()

    return (
        <div className={styles.sidebar}>
            <Image className={styles.avatar} src="/me.png" height={80} width={80} alt="guild_avatar" />
            <div className={styles.icons}>
                {routes.map((route) => (
                    <div className={styles.icon} key={route.name} onClick={() => router.push(route.getPath(router.query.id))}>
                        <div className={styles.item}>{route.icon} {route.name}</div>
                    </div>
                ))}
            </div>
            <div>
                <RiLogoutCircleLine size={24} />
            </div>
        </div>
    )
}