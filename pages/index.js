import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import expertiseImage from "../public/images/expertise.png";
import heroImage from "../public/images/hero.png";
import aboutImage from "../public/images/about.png";
import contactImage from "../public/images/contact.png";
import imgGridSectionImage from "../public/images/img_grid.png";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.hero_bg_container}>
            <Image
              className={styles.hero_img}
              alt="hero-image"
              src={heroImage}
              layout="fill"
              objectFit="cover"
            />
            {/* <img alt="hero-image" src="/hero.png" width="100" height="100" /> */}
          </div>

          <div className={styles.content_container}>
            <h1 className={styles.heading}>
              We&#39;re a 360
              <br />
              Branding Agency{" "}
            </h1>
            <h2 className={styles.sub_heading}>Expertise. Commitment. Value</h2>
          </div>
        </section>

        <section className={styles.expertise}>
          <h1 className={styles.main_title}>FIELDS OF EXPERTISE</h1>

          <div className={styles.grid_container}>
            <div className={`${styles.grid_item} ${styles.table_container}`}>
              {[
                "Digital Marketing",
                "Lead Generation",
                "Public Relation",
                "Influencer Management",
                "Website Design & Development",
                "E-Commerce Solutions",
              ].map((title, index) => (
                <div className={styles.table_item} key={index}>
                  <p className={styles.number}>{`0${index + 1}`}</p>
                  <h2 className={styles.title}>{title}</h2>
                </div>
              ))}
            </div>
            <div className={`${styles.grid_item} ${styles.image_item}`}>
              <div className={styles.img_container}>
                <Image
                  className={styles.expertise_img}
                  alt="expertise-image"
                  src={expertiseImage}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <div className={styles.grid_container}>
            <div className={styles.img_container}>
              <Image
                className={styles.about_img}
                alt="about-image"
                src={aboutImage}
                objectFit="cover"
              />

              <div className={styles.main_title}>ABOUT</div>
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.heading}>
                We are more than a branding agency
              </h2>

              <p>
                We specialize in placing your business in the media, yielding
                impactful communication results, positioning you as the market
                leader, driving increased traffic to your website, improving
                your search rankings, promoting your products and services, and
                improving conversions of customers for your brand. We specialize
                in graphic design, development of high-quality websites,
                customized web applications, Amazing graphics video intro, and
                after effect logo at a reasonable cost, which helps you create
                an outstanding web presence that compliments your company&#39;s
                identity.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.img_grid_section}>
          <Image
            className={styles.img_grid_section_img}
            alt="img-grid-section-image"
            src={imgGridSectionImage}
            objectFit="cover"
          />
        </section>

        <section className={styles.contact}>
          <div className={styles.grid_container}>
            <div className={styles.img_container}>
              <Image
                className={styles.contact_img}
                alt="contact-image"
                src={contactImage}
                objectFit="cover"
              />

              <div className={styles.main_title}>CONTACT US</div>
            </div>
            <div className={styles.content_container}>
              <h2 className={styles.heading}>
                ADO <br /> MOTO
              </h2>

              <div className={styles.address_container}>
                <div className={`${styles.address} ${styles.address_item}`}>
                  <i className="gg-pin"></i>
                  <address>123 Anywhere street, Any City, ST 12345</address>
                </div>

                <div className={`${styles.phone} ${styles.address_item}`}>
                  <i className="gg-phone"></i>
                  <Link href="tel:+9654850266">
                    <a>+9654850266</a>
                  </Link>
                </div>

                <div className={`${styles.email} ${styles.address_item}`}>
                  <i className="gg-mail"></i>
                  <Link href="mailto:hello@adomoto.co">
                    <a>hello@adomoto.co</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
