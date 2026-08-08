import styles from './content-job.module.css'

export default function ContentJob() {
    return(
        <section>
            <h2 className={styles.containerTitle}>Trabajo</h2>
            <div className={styles.containerJobs}>
                <div className={styles.containerWork}>  
                    <p className={styles.workType}>Desarrollo de Aplicaciones Web</p>
                    <p className={styles.workCompany}>OSAO | Finlandia/Oulu</p>
                    <p className={styles.workData}>MARZO 2026 - JUNIO 2026</p>
                </div>
                <div className={styles.containerWork}>
                    <p className={styles.workType}>Desarrollo de Aplicación Web en Shopify</p>
                    <p className={styles.workCompany}>Piece Makers Gifts | Irlanda/Derry</p>
                    <p className={styles.workData}>MARZO 2024 - JUNIO 2024</p>
                </div>
            </div>
        </section>
    )
}