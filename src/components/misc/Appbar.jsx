import styles from "./index.module.scss"
import { RiMenu3Line } from "react-icons/ri" 
import { useRouter } from "next/router";

export const Appbar = () => {
    const router = useRouter();
    return (
        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push("/dashboard") }>
                <RiMenu3Line size={24} />
                <p>Dashboard</p>
            </div>
            <div>
                <p>{"Guild Name"}</p>
            </div>
        </div>
    )
}