import NavBar from "@/components/ui/nav-bar/nav-bar";
import Links from "@/components/ui/links/links";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Main(){
    return (
        <main className={styles.main}>
            <h1>Curriculum de Alan Alcañiz</h1>
            <Image src="/fotoperfil.png" alt="Foto de perfil" width={200} height={200} className={styles.profileImage}/>
            <div className={styles.containerPresentation}>
                <p className={styles.presentationText}>Hola, me llamo Alan.</p>
                <p>Soy desarrollador <span className={styles.highlight}>Frontend Web</span> con conocimientos básicos en <span className={styles.midHighlight}>Backend</span>, <span className={styles.midHighlight}>BD</span> y <span className={styles.midHighlight}>Despliegue</span>.</p>
                <p>Me especializo en <span className={styles.highlight}>React</span>, <span className={styles.highlight}>NextJS</span> y <span className={styles.highlight}>TypeScript</span>.</p>
            </div>
            <div className={styles.linksSeparator}></div>
            <Links />
            <NavBar />
        </main>
    )
}