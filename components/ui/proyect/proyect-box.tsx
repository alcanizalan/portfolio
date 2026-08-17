import styles from "./proyect-box.module.css"

import Link from "next/link"
import Image from "next/image"

import { StaticImageData } from "next/image"
import type { TagType } from "@/types/proyectsType"

export default function ProyectBox({id, name, description, tags, images, link}:{id: number, name: string, description: string, tags: TagType[], images: StaticImageData | string, /*images: StaticImageData[] | string[],*/ link: string }){
    return(
        <Link href={link} target="_blank" rel="noopener noreferrer">
            <div className={styles.containerProyect}>
                <div className={styles.containerImage}>
                    <Image className={styles.imageProyect} src={images} height={500} width={500} alt="" />
                </div>
                <div className={styles.proyectInfo}>
                    <div className={styles.titleContainer}>
                        <h2 className={styles.titleProyect}>{name}</h2>
                        <Image className={styles.arrowLink} src="/icons/linkarrow_icon.svg" width={20} height={20} alt="Link icon" />
                    </div>
                    <p>{description}</p>
                    <div className={styles.tagsContainer}>
                        {
                            tags.map((tag, key) => {
                                return(
                                    <div key={key} className={styles.tag}>
                                        <span>
                                            {tag.name}
                                        </span>
                                        <Image className={styles.tagIcon} src={tag.icon} width={17} height={17} alt={tag.name + " icon"} />
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}