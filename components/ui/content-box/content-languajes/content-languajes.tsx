import styles from "./content-languajes.module.css"

export default function ContentLanguaje(){
    return(
        <section>
            <h2 className={styles.containerTitle}>Idiomas</h2>
            <ul className={styles.containerLanguajes}>
                <li> Español - <span>Nativo</span> </li>
                <li> Inglés - <span>B2</span> </li>
                <li> Valenciano - <span>Nativo</span></li>
            </ul>
        </section>
    )
}