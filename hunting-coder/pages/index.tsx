
import styles from "../styles/Home.module.css";
import Navbar from './components/Navbar'
import HomeBlog from './components/HomeBlog'




// import Script from 'next/script'



export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <HomeBlog />
    </div>
  );
}
