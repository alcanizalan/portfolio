import Image from "next/image"

import styles from "./about-me.module.css"

export default function AboutMe(){
    return(
        <section className={styles.section}>
            <div className={styles.imageContainer}>
                <div className={styles.imageMark}>
                    <Image className={styles.profilePicture} src="/profilePicture.jpg" alt="Profile Picture" width={150} height={150} />
                    <div>
                        <span>Alan Alcañiz Cerros - 20 años</span>
                        <span>Desarrollador Frontend Web</span>
                    </div>
                </div>
            </div>
            <h2 className={styles.title}>Sobre mí</h2>
            <p className={styles.textoSobreMi}>Hola! Me llamo Alan y soy un chico apasionado por el frontend web y el diseño.</p>
            <p className={styles.textoSobreMi}>Empecé con este hobbie a los 17 años y actualmente se que es una de mis pasiones.</p>
            <p className={styles.textoSobreMi}>Terminé mis estudios en 2026 pero sigo aprendiendo de forma autodidacta.</p>
            <p className={styles.textoSobreMi}>Viví 3 meses en Irlanda y 3 meses en Finlandia por mi pasión a ponerme retos difíciles y probar cosas nuevas.</p>
            <p className={styles.textoSobreMi}>Soy alguien muy social, con muchas ganas de probar cosas nuevas y nuevos retos y con muchas ganas de aprender.</p>
        </section>
    )
}