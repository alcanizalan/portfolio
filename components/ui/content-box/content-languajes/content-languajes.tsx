import styles from "./content-languajes.module.css"
import Image from "next/image";
import Link from "next/link";

export default function ContentLanguaje(){
    return(
        <section>
            <h2 className={styles.containerTitle}>Idiomas</h2>
            <ul className={styles.containerLanguajes}>
                <li className={styles.listArticle}> Español - <span>Nativo</span> </li>
                <li className={styles.listArticle}> Inglés - <span>C1</span> <Link href="/cv/english_hirint_alan.pdf" target="_blank" ><Image src="/icons/info_icon.svg" height={16} width={16} alt="Info Icon" /></Link> </li>
                <li className={styles.listArticle}> Valenciano - <span>Nativo</span></li>
            </ul>
        </section>
    )
}