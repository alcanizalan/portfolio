import styles from "./content-languajes.module.css"
import Image from "next/image";
import Link from "next/link";
import { habilitiesData } from "@/data/habilitiesData";

export default function ContentLanguaje(){
    return(
        <section>
            <h2 className={styles.containerTitle}>Idiomas</h2>
            {/*<ul className={styles.containerLanguajes}>
                <li className={styles.listArticle}> Español - <span>Nativo</span> </li>
                <li className={styles.listArticle}> Inglés - <span>C1</span> <Link href="/cv/english_hirint_alan.pdf" target="_blank" ><Image src="/icons/info_icon.svg" height={16} width={16} alt="Info Icon" /></Link> </li>
                <li className={styles.listArticle}> Valenciano - <span>Nativo</span></li>
            </ul>*/}
            

            <div>
                {habilitiesData.map((hability) => (
                    <div key={hability.name}>
                        <h3>{hability.name}</h3>
                        <div className={styles.habilityContainer}>
                            <div className={styles.habilityBar}>
                                <div
                                    style={{ width: `${hability.level}%`, height: '100%', backgroundColor: 'rgb(15, 222, 15)' }}
                                ></div>
                            </div>
                            <p>{hability.category}</p>
                        </div>
                    </div>
                ))}
            </div>
                
        </section>
    )
}