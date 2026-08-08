import Image from "next/image";

import AboutMe from "@/components/about-me";
import Info from "@/components/info";
import NavBar from "@/components/ui/nav-bar/nav-bar"; 

import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.containerPresentation}>
        <AboutMe />
        <Info />
      </div>
      <NavBar />
    </main>
  );
}
