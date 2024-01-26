import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon";
import About from "./components/About";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className={styles.main}>
      <Pokemon/>
      <About/>
      <Stats/>
    </main>
  );
}
