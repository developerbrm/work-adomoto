import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.content_container}>
            <h1 className={styles.heading}>
              We&#39;re a 360
              <br />
              Branding Agnecy{" "}
            </h1>
            <h2 className={styles.sub_heading}>Expertise. Commitment. Value</h2>
          </div>

          <div className={styles.hero_bg_container}>
            {/* <Image alt="hero-image" src="/hero.png" width="100" height="100" /> */}
            <img alt="hero-image" src="/hero.png" width="100" height="100" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
