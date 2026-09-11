"use client";
import Image from "next/image";
import styles from "./content-contact.module.css";
import Disponible from "../../disponible/disponible";

export default function ContentContact() {
    return (
        <div className={styles.container}>
            <h2 className={styles.containerTitle}>Contacto</h2>
            <div className={styles.disponibleContainer}>
                <Disponible />
            </div>
            <a className={styles.contactLink} href="mailto:alanalcaniz24@gmail.com?subject=Contacto%20desde%20mi%20portfolio">
                <Image src="/icons/mail_icon.svg" height={28} width={28} alt="Mail Icon" />Contacta conmigo
            </a>
        </div>
    );
}