import Image from "next/image"

import styles from "./content-stack.module.css"
import TecnologyBox from "../tecnology-box/tecnology-box"

import {stackData} from "@/data/stackData"

export default function ContentStack() {
    return(
        <section>
            <h2 className={styles.containerTitle}>Stack</h2>
            <div className={styles.containerStack}>
                {
                    stackData.map((tecnology, key) => (
                        <TecnologyBox
                            key={key}
                            logo={tecnology.image}
                            name={tecnology.name}  

                        />
                    ))
                }
            </div>
        </section>
    )
}