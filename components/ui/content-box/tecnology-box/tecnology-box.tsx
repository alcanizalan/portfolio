"use client"
import Image from "next/image"
import styles from "./tecnology-box.module.css"

import {motion} from "motion/react"

import { StaticImageData } from "next/image"

const spanVariants = {
        initial: {
            opacity: 0,
            y: -10,
            pointerEvents: 'none',
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .3,
                ease: 'easeOut',
            },
        },
    } as const;

export default function TecnologyBox({ logo, name }:{logo: StaticImageData | string, name: string}) {
    

    return (
        <motion.div initial="initial" whileHover="hover" className={styles.containerIndividualLogo}>
            <Image className={styles.imageLogo} src={logo} alt={name} height={30} width={30} />
            <motion.span className={styles.etiquetaTecnologia} variants={spanVariants}>{name}</motion.span>
        </motion.div>
    )
}