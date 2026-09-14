"use client"

import Image from "next/image"

import styles from "./about-me.module.css"
import Links from "./ui/links/links"

import {motion} from "motion/react"
import BlobMorph from "./svg/svg"

export default function AboutMe(){
    return(
        <section className={styles.section}>
            <h1>Alan Alcañiz Cerros</h1>
            <div className={styles.imageContainer}>
                <BlobMorph width={600} height={600} marginTop={0} />              
            </div>
            <div className={styles.textAboutMe}>
                <h2 className={styles.title}>Sobre mí</h2>
                <p className={styles.textoSobreMi}>Empecé a programar en 2022 como hobby con Python y, pocos meses después, descubrí el desarrollo web con HTML y CSS.</p>
                <p className={styles.textoSobreMi}>En 2023 comencé con JavaScript y React, y decidí convertir aquello que empezó como un hobby en mi profesión.</p>
                <p className={styles.textoSobreMi}>Desde entonces sigo aprendiendo y mejorando mis habilidades. La programación también me ha permitido vivir y trabajar 3 meses en Irlanda y 3 meses en Finlandia.</p>
                <p className={styles.textoSobreMi}>Soy una persona social, curiosa y autodidacta, siempre con ganas de aprender y afrontar nuevos retos.</p>
            </div>
            <Links />
        </section>
    )
}