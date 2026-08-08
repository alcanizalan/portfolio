import Image from "next/image"

import styles from "./content-stack.module.css"
import TecnologyBox from "../tecnology-box/tecnology-box"

export default function ContentStack() {
    return(
        <section>
            <h2 className={styles.containerTitle}>Stack</h2>
            <div className={styles.containerStack}>
                <div className={styles.containerPart}>
                    <h3>Actual</h3>
                    <div className={styles.containerLogo}>
                        <TecnologyBox logo="/logos/logoReact.png" name="React" />
                        <TecnologyBox logo="/logos/logoNext.png" name="Next.js" />
                        <TecnologyBox logo="/logos/logoTypescript.png" name="Typescript" />
                        <TecnologyBox logo="/logoGit.png" name="Git" />
                    </div>
                </div>
                <div className={styles.containerPart}>
                    <h3>Anteriores</h3>
                    <div className={styles.containerLogo}>
                        <TecnologyBox logo="/logos/logoAngular.png" name="Angular" />
                        <TecnologyBox logo="/logoJava.png" name="Java" />
                        <TecnologyBox logo="/logoDocker.png" name="Docker" />
                    </div>
                </div>
                <div className={styles.containerPart}>
                    <h3>Aprendiendo</h3>
                    <div className={styles.containerLogo}>
                        <TecnologyBox logo="/logos/logoZustand.png" name="Zustand" />
                    </div>
                </div>
                <div className={styles.containerPart}>
                    <h3>Programas</h3>
                    <div className={styles.containerLogo}>
                        <TecnologyBox logo="/logos/logoAffinity.png" name="Affinity" />
                        <TecnologyBox logo="/logos/logoDavinci.png" name="DaVinci Resolve" />
                        <TecnologyBox logo="/logos/logoFigma.png" name="Figma" />
                    </div>
                </div>
            </div>
        </section>
    )
}