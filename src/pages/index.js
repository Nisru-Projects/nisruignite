import Head from 'next/head'
import Image from 'next/image'
import styles from '../utils/styles/home.module.scss'
import { FaDiscord } from 'react-icons/fa'

export default function Home() {

  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/api/auth/discord'
  }

  return (
    <div className='page aligned-center'>
      <div>
        <button className={styles.button} onClick={handleLogin}>
          <FaDiscord size={25} color="#7289CA" />
          <span>Login with Discord</span>
        </button>
      </div>
    </div>
  )
}
