import React from "react";
import Contact from "../../components/Contact";
import styles from "./about.module.scss";
import Image from "next/image";
import about from "../../public/images/about.png";
import Header from "../../components/Header";
import animationObserver from "../../library/animationObserver";

const Home = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.about}>
        <div className="content-with-heading-container">
          <div className={styles.grid_container}>
            <div className="content-with-heading-item">
              <h2
                className="heading"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.1`}
              >
                ABOUT US
              </h2>

              <p
                className="content"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.3`}
              >
                Live your youth undefeated, make your youth last forever. We
                don&#39;t let time dictate our lives. We don&#39;t bow down to
                inclemental circumstances. We refuse to let anything come in our
                way if we&#39;ve set our goals to it. We are a bunch of eclectic
                young adults set out to do what we do best- build brands.
                <br />
                <br />
                We came into being in 2015, with a hunger to work, grow and
                connect. Since then, we have had the pleasure of working with
                more than 50+ projects belonging to a wide range of verticals-
                Hospitality, Fashion, E-Commerce, Lifestyle, Entertainment,
                Education, Real Estate and more. The way forward for our agency
                will be paved with our need to deliver on our promises to our
                clients because - It&#39;s not enough to aim, you must hit.
              </p>
            </div>

            <Image
              className={styles.gird_image}
              alt="about"
              src={about}
              objectFit="cover"
              layout="responsive"
            />

            <p className={`content ${styles.grid_content}`}>
              <br />
              Our office is based adjacent to the lively B6 market of Safdurjung
              Enclave and is under-a-minute walk from the lushness of Deer Park,
              if you care to go on a stroll and refresh your mind. Our team is
              currently 30 people strong, with each member belonging to varied
              cultural backgrounds and bringing their own expertise and skill
              sets in to the mix. From 10 people to 30, we have gone through
              rapid expansion and have also extended our services portfolio to
              keep up with all our clients&#39; needs.
            </p>
          </div>
        </div>
      </main>

      <Contact />
    </>
  );
};

export default Home;
