import styles from './content-studies.module.css'

export default function ContentStudies() {
    return(
        <section>
            <h2 className={styles.containerTitle}>Estudios</h2>
            <div className={styles.containerStudies}>
                <div className={styles.containerTitle}>
                    <p className={styles.studyType}>CFGS Desarrollo de Aplicaciones Web</p>
                    <p className={styles.studyCentre}>CIPFP Ausias March | 2024 - 2026</p>
                </div>
                <div className={styles.containerTitle}>
                    <p className={styles.studyType}>CFGM Sistemas Microinformáticos y Redes</p>
                    <p className={styles.studyCentre}>IES Blasco Ibañez | 2022 - 2024</p>
                </div>
            </div>
        </section>
    )
}