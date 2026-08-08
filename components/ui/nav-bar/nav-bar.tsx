import styles from "./nav-bar.module.css";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    return (
        <section className={styles.sectionNavBar}>
            <div className={styles.navBar}>
                <div className={styles.containerLink}>
                    <Link href="/">
                        <div className={styles.containerImage}>
                            <Image src="/logos/home_logo.svg" width={80} height={80} alt="" />
                        </div>
                    </Link>
                    <div className={styles.hoverBar}></div>
                </div>
                <div className={styles.containerLink}>
                    <Link href="/proyects">
                        <div className={styles.containerImage}>
                            <Image src="/logos/folder_logo.svg" width={80} height={80} alt="" />
                        </div>
                    </Link>
                    <div className={styles.hoverBar}></div>
                </div>
                <div className={styles.containerLink}>
                    <Link href="/about">
                        <div className={styles.containerImage}>
                            <Image src="/logos/user_logo.svg" width={80} height={80} alt="" />
                        </div>
                    </Link>
                    <div className={styles.hoverBar}></div>
                </div>
            </div>
        </section>
    )
}