import Image from "next/image"
import styles from "./tecnology-box.module.css"

export default function TecnologyBox({ logo, name }:{logo: string, name: string}) {
    return (
        <div className={styles.containerIndividualLogo}>
            <Image className={styles.imageLogo} src={logo} alt={name} height={50} width={50} />
            <span className={styles.etiquetaTecnologia}>{name}</span>
        </div>
    )
}