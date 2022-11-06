import Image from 'next/image';
import styles from './index.module.scss';

export const GuildMenuItem = ({ guild }) => {
    return (
        <div className={styles.container}>
            <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} 
                className={styles.image} 
                width={55} 
                height={55} 
                alt={guild.name} 
            />
            <p>{guild.name}</p>
        </div>
    );
}