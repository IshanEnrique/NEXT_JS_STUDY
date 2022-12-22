
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from './components/Navbar'
import HomeBlog from './components/HomeBlog'




// import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomeBlog />
    </div>
  );
}
