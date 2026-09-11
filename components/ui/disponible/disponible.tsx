
import { motion } from "framer-motion";
import styles from "./disponible.module.css";

export default function Disponible() {
    return (
        <div className={styles.disponible}>
            <motion.div className={styles.circle} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} animate={{ scale: [1, 1.2, 1] }}/>
            <span>Disponible</span>
        </div>
    );
}