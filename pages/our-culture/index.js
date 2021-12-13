import React from "react";
import Contact from "../../components/Contact";
import styles from "./our-culture.module.scss";
import Image from "next/image";
import culture from "../../public/images/culture.png";
import Header from "../../components/Header";

const index = () => {
  return (
    <>
      <Header />

      <main className={styles.our_culture}>
        <div className="content-with-heading-container">
          <div className={styles.grid_container}>
            <div className="content-with-heading-item">
              <h2
                className="heading"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.1`}
              >
                OUR CULTURE
              </h2>

              <p
                className="content"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.4`}
              >
                &#34;If you&#39;re lucky enough to have people working for you,
                then it is your moral obligation to make sure they look forward
                to coming to office in the morning&#34;
                <br />
                <br />
                You can have the best strategy in the world but if you don&#39;t
                have the right culture, you&#39;re no good. The best work is
                only produced when each person in the team is striving to give
                their best and it&#39;s really important to cultivate such an
                environment. When it comes to our work, we are all
                professionals, down to the very core. But, if you ask any of us
                if we&#39;ve got friends at work, all of us would say yes! We
                have lunch together, celebrate birthdays, help each other
                brainstorm ideas, party together, heck, we even rush to the
                hospital at 2 am for each other if need be!
                <br />
                <br />
                We come to the office everyday to achieve great things and we do
                them, against all odds.
                <br />
                <br />
                We are not just another agency, we are Adomoto.
              </p>
            </div>
            <div
              // data-animname="fade-in-up"
              // data-onetime="true"
              // data-delay={`1`}
              className={styles.grid_image}
            >
              <Image
                alt="culture"
                src={culture}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </>
  );
};

export default index;
