import Image from "next/image"
import Link from "next/link"

import styles from "./about-me.module.css"
import Links from "./ui/links/links"

export default function AboutMe(){
    return(
        <section className={styles.section}>
            <h1>Alan Alcañiz Cerros</h1>
            <div className={styles.imageContainer}>
                <div className={styles.imageMark}>
                    <Image className={styles.profilePicture} src="/fotoperfil.png" alt="Profile Picture" width={150} height={150} />
                    <div className={styles.photoTextContainer}>
                        <p>Alan Alcañiz Cerros - 20 años</p>
                        <p>Desarrollador Frontend Web</p>
                    </div>
                </div>
            </div>
            <div className={styles.textAboutMe}>
                <h2 className={styles.title}>Sobre mí</h2>
                <p className={styles.textoSobreMi}>Empecé con este hobbie a los 17 años y actualmente se que es una de mis pasiones.</p>
                <p className={styles.textoSobreMi}>Terminé mis estudios en 2026 pero sigo aprendiendo de forma autodidacta.</p>
                <p className={styles.textoSobreMi}>Viví 3 meses en Irlanda y 3 meses en Finlandia por mi pasión a ponerme retos difíciles y probar cosas nuevas.</p>
                <p className={styles.textoSobreMi}>Soy alguien muy social, con muchas ganas de probar cosas nuevas y nuevos retos y con muchas ganas de aprender.</p>
            </div>
            <Links />
        </section>
    )
}