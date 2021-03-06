import React from "react";
import Contact from "../../components/Contact";
import styles from "./our-team.module.scss";
import Image from "next/image";
import about from "../../public/images/about.png";
import Header from "../../components/Header";
import animationObserver from "../../library/animationObserver";

const OurTeam = () => {
  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.our_team}>
        <div className="content-with-heading-container">
          <div className="content-with-heading-item">
            <h2
              className="heading"
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.1`}
            >
              OUR TEAM
            </h2>

            <div
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.2`}
              className="content"
            >
              At Adomoto, we have become specialists at turning new ideas into
              viable products for our client’s organizations. Some of the more
              rewarding projects we have had the honour to be involved in,
              started with simple ideas and grew into profitable businesses from
              the ground up. It brings us great joy to see our clients gain
              market share in their industries through our web-based solutions.
              <br />
              <br />
              We generally follow a protocol to ensure that your idea flows
              through the right trajectory to become a one-of-a-kind product.
              However, at Cloud Horizon, we aren’t sticklers for routine and we
              understand that no two projects are the same. We accept and
              encourage adjustments to our approach and are happy to go back to
              the drawing board at any point in the process.
              <br />
              <br />
              <p
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.25`}
                className="heading-color"
              >
                Meet our team who make this divrocess come to life.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.persons_grid_container}>
          {[
            { name: "YASH KUMAR", post: "Co Founder " },
            { name: "KIRTI YADAV", post: "Co Founder " },
            { name: "HARSH KUMAR", post: "CFO" },
            { name: "MAYANK SOMANI", post: "COO" },
            { name: "ANIL BISHT", post: "Manager" },
          ].map(({ name, post }, index) => (
            <div key={name} className={styles.person_item}>
              <h4
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`${index * 0.1}`}
              >
                {name}
              </h4>
              <p
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`${index * 0.15}`}
              >
                {post}
              </p>
            </div>
          ))}
        </div>
      </main>

      <Contact />
    </>
  );
};

export default OurTeam;
