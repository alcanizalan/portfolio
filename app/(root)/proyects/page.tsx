import Navbar from "@/components/ui/nav-bar/nav-bar";

import Link from "next/link";
import Image from "next/image";

import { proyectData } from "@/data/proyectData"
import ProyectBox from "@/components/ui/proyect/proyect-box"

import styles from "./page.module.css";

export default function Proyects(){
    return (
        <section className={styles.section}>
            <h1>Proyectos de Alan Alcañiz</h1>
            <div className={styles.containerProyects}>
                {
                    proyectData.map((proyect, key) => {
                        return(
                            <ProyectBox
                                key={key}
                                id={proyect.id}
                                name={proyect.name}
                                description={proyect.description}
                                tags={proyect.tags}
                                images={proyect.image}
                                link={proyect.link}
                            />
                        )
                    })
                }
            </div>
            <Navbar />
        </section>
    )
}