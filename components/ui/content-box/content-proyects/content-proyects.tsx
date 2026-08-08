import Image from "next/image"
import Link from "next/link"

import styles from "./content-proyects.module.css"

export default function ContentProyects() {
    return(
        <section>
            <h2 className={styles.containerTitle}>Proyectos</h2>
            <Link href="https://github.com/alcanizalan/milfShakesClicker" target="_blank" rel="noopener noreferrer">
            <div className={styles.containerProyect}>
                <h3 className={styles.titleProyect}>MilfShakes Clicker</h3>
                <div className={styles.containerImage}>
                    <Image className={styles.imageProyect} src="/proyects/MilfClick.png" height={500} width={500} alt="" />
                </div>
                <p>Una juego no oficial basada en la marca MilfShakes al estilo de el famoso Cookie Clicker</p>
            </div>
            </Link>
        </section>
    )
}