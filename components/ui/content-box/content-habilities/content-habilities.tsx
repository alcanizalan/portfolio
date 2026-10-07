"use client"

import { habilitiesData } from "@/data/habilitiesData"
import { useState } from "react"
import styles from './content-habilities.module.css'

export default function ContentHabilities(){
    const [showAll, setShowAll] = useState(false)

    return(
        <div className={styles.contentHabilities}>
            <h2 className={styles.containerTitle}>Especialización</h2>
            <div>
                {habilitiesData.map((hability) => (
                    <div key={hability.name}>
                        <h3>{hability.name}</h3>
                        <div className={styles.habilityContainer}>
                            <div className={styles.habilityBar}>
                                <div
                                    style={{ width: `${hability.level}%`, height: '100%', backgroundColor: '#21c527' }}
                                ></div>
                            </div>
                            <p>{hability.category}</p>
                        </div>
                    </div>
                ))}
                
                {/*showAll && (
                        <div>
                            <div className={styles.separationLine}></div>
                            {secundaryHabilitiesData.map((hability) => (
                                <div key={hability.name}>
                                    <h3>{hability.name}</h3>
                                    <div className={styles.habilityContainer}>
                                        <div className={styles.habilityBar}>
                                            <div
                                                style={{ width: `${hability.level}%`, height: '100%', backgroundColor: '#21c527' }}
                                            ></div>
                                        </div>
                                        <p>{hability.category}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                */}   
                <button onClick={() => setShowAll(!showAll)} className={styles.showAllButton}>{showAll ? "Show Less" : "Load More"}</button>
            </div>
        </div>
    )
}