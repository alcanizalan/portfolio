import Navbar from "@/components/ui/nav-bar/nav-bar";

import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

export default function Proyects(){
    return (
        <section className={styles.section}>
            <h1>Proyectos de Alan Alcañiz</h1>
            <div className={styles.containerProyects}>
                <Link href="https://github.com/alcanizalan/milfShakesClicker" target="_blank" rel="noopener noreferrer">
                <div className={styles.containerProyect}>
                    <div className={styles.containerImage}>
                        <Image className={styles.imageProyect} src="/proyects/MilfClick.png" height={500} width={500} alt="" />
                    </div>
                    <h2 className={styles.titleProyect}>MilfShakes Clicker</h2>
                    <p>Una juego no oficial basada en la marca MilfShakes al estilo de el famoso Cookie Clicker</p>
                </div>
                </Link>
            </div>
            <Navbar />
        </section>
    )
}