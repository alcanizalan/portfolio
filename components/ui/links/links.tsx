import Image from "next/image";
import Link from "next/link";

import styles from "./links.module.css";

export default function Links() {
    return (
        <div className={styles.links}>
            <a href="/cv/cv_programacion_alan.pdf" download="cv_programacion_alan.pdf" className={styles.buttonDownload}>
                <Image src="/iconCV.svg" height={30} width={30} alt="" /> DOWNLOAD CV
            </a>
            <Link href="https://github.com/alcanizalan" target="_blank" rel="noopener noreferrer" >
                <Image src="/logos/logoGithub.png" alt="logo github" height={45} width={45} />
            </Link>
        </div>
    );
}
