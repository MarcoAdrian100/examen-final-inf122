import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/Pokemon";
import About from "./components/About";
import Stats from "./components/Stats";
/*import AboutWrapper from '../path/to/AboutWrapper';*/

export default function Home() {
  return (
    <main className={styles.main}>

      {/*<Pokemon/>
      <About/>
      <Stats/>*/}
      
      <Stats/>

    </main>
  );
}
