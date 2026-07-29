import styles from './info-box.module.css'

export default function InfoBox({ children }: { children: React.ReactNode }) {
    return(
        <section className={styles.cajaInfo}>
            {children}
        </section>
    )
}