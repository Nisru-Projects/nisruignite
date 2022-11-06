import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/styles/api";
import styles from './index.module.scss'

const MenuPage = ({ guilds }) => {
    return (
        <div className="page">
            <div className={styles.container}>
                <h1 className={styles.title}>Please Select a Guild</h1>
                {guilds.map((guild) => (
                    <div key={guild.id}>
                        <GuildMenuItem guild={guild}></GuildMenuItem>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return fetchMutualGuilds(context)
}

export default MenuPage;