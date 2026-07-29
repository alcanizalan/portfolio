import Image from "next/image";

import AboutMe from "@/components/about-me";
import Info from "@/components/info";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe />
      <Info />
    </main>
  );
}
