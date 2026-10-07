"use client"

import NavBar from "@/components/ui/nav-bar/nav-bar";
import Links from "@/components/ui/links/links";

import styles from "./page.module.css";
import Image from "next/image";

import { motion } from "motion/react"
import Disponible from "@/components/ui/disponible/disponible";


export default function Main(){
    return (
        <main className={styles.main}>
            <h1>Curriculum de Alan Alcañiz</h1>
            <section className={styles.sectionPhoto}>   
                <Image width={700} height={700} src="/fotoperfil.png" alt={""} /> 
                <Links />
            </section>
            <section className={styles.sectionInfo}>
                <div className={styles.containerPresentation}>
                    <div className={styles.disponibleContainer}>
                        <Disponible />
                    </div>
                    <p className={styles.presentationText}>Hola, me llamo Alan.</p>
                    <p>Soy desarrollador <span className={styles.highlight}>Frontend Web</span> con conocimientos en <span className={styles.midHighlight}>Backend</span>, <span className={styles.midHighlight}>BD</span> y <span className={styles.midHighlight}>Despliegue</span>.</p>
                    <p>Me especializo en <span className={styles.highlight}>React</span>, <span className={styles.highlight}>NextJS</span> y <span className={styles.highlight}>TypeScript</span>.</p>
                </div>
            </section>           
            
            {/* 
            <motion.div className={styles.arrowIcon} animate={{y: [-10, 10]}} transition={{duration: .6, repeat: Infinity, repeatType: 'reverse'}}>
                <Image src="/icons/arrow_icon.svg" width={50} height={50} alt="Flecha"/>
            </motion.div>
            */}
            <NavBar />
        </main>
    )
}