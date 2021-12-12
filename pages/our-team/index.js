import React from "react";
import Contact from "../../components/Contact";
import styles from "./our-team.module.scss";
import Image from "next/image";
import about from "../../public/images/about.png";
import Header from "../../components/Header";

const index = () => {
  return (
    <>
      <Header />

      <main className={styles.our_team}>
        <div className="content-with-heading-container">
          <div className="content-with-heading-item">
            <h2 className="heading">OUR TEAM</h2>

            <p className="content">
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
              <div className="heading-color">
                Meet our team who make this divrocess come to life.
              </div>
            </p>
          </div>
        </div>

        <div className={styles.persons_grid_container}>
          {[
            { name: "YASH KUMAR", post: "Co Founder " },
            { name: "KIRTI PAL YADAV", post: "Co Founder " },
            { name: "HARSH KUMAR", post: "Co Founder " },
            { name: "MAYANK SOMANI", post: "Co Founder " },
          ].map(({ name, post }) => (
            <div key={name} className={styles.person_item}>
              <h4>{name}</h4>
              <p>{post}</p>
            </div>
          ))}
        </div>
      </main>

      <Contact />
    </>
  );
};

export default index;
