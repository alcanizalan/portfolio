"use client"

import NavBar from "@/components/ui/nav-bar/nav-bar";
import Links from "@/components/ui/links/links";

import styles from "./page.module.css";
import Image from "next/image";

import { motion } from "motion/react"
import BlobMorph from "@/components/svg/svg";
import Disponible from "@/components/ui/disponible/disponible";


export default function Main(){
    return (
        <main className={styles.main}>
            <h1>Curriculum de Alan Alcañiz</h1>
            <BlobMorph width={250} height={250} marginTop={50} />            
            <div className={styles.containerPresentation}>
                
                <Disponible />
                <p className={styles.presentationText}>Hola, me llamo Alan.</p>
                <p>Soy desarrollador <span className={styles.highlight}>Frontend Web</span> con conocimientos en <span className={styles.midHighlight}>Backend</span>, <span className={styles.midHighlight}>BD</span> y <span className={styles.midHighlight}>Despliegue</span>.</p>
                <p>Me especializo en <span className={styles.highlight}>React</span>, <span className={styles.highlight}>NextJS</span> y <span className={styles.highlight}>TypeScript</span>.</p>
            </div>
            <div className={styles.linksSeparator}></div>
            <Links />
            {/* 
            <motion.div className={styles.arrowIcon} animate={{y: [-10, 10]}} transition={{duration: .6, repeat: Infinity, repeatType: 'reverse'}}>
                <Image src="/icons/arrow_icon.svg" width={50} height={50} alt="Flecha"/>
            </motion.div>
            */}
            <NavBar />
        </main>
    )
}