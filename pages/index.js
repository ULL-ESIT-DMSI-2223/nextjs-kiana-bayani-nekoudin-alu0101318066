import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

function Home() {
  return (
    <div>
      <Head>
        <title>Inicio</title>
        <link rel="icon" href="/photo_icon.jpg" />
      </Head>

      <main className={styles.main}>
        <img src="/photo_icon.jpg" className={styles.icon} />
        <h2>Inicio</h2>
        <h3>Eliga un enlace</h3>
        <Link href="/pet">Generador de nombres para la mascota</Link>
        <br></br>
        <Link href="/image">Generador de imágenes</Link>
        <br></br>
        <Link href="/404">Página de error</Link>
      </main>
    </div>
  )
}
export default Home


