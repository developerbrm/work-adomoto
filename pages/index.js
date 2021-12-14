import uniqid from "uniqid";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./Home.module.scss";
import icon_idea from "../public/images/icon_idea.png";
import icon_strategy from "../public/images/icon_strategy.png";
import icon_execution from "../public/images/icon_execution.png";
import Contact from "../components/Contact";
import animationObserver from "../library/animationObserver";

export default function Home() {
  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <div className="page-home">
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.grid_container}>
            {[
              { path: "/services", title: "SERVICES" },
              { path: "/about", title: "ABOUT US" },
              { path: "/contact", title: "CONTACT" },
              { path: "/our-clients", title: "OUR CLIENTS" },
              { path: "/our-team", title: "OUR TEAM" },
              { path: "/our-culture", title: "OUR CULTURE" },
            ].map(({ path = "", title = "" }, index) => (
              <Link key={uniqid()} href={path}>
                <a className={styles.shaped_item}>
                  <span
                    data-animname="fade-in-up"
                    data-onetime="true"
                    data-delay={`${index * 0.2}`}
                    className={styles.title}
                  >
                    {title}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        </section>

        <section className="content-with-heading-container home-content-with-heading-container">
          <article className="content-with-heading-item">
            <div className="heading-with-icon">
              <h2
                className="heading"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.19`}
              >
                IDEA
                <Image
                  width="50"
                  height="50"
                  priority
                  className="icon"
                  alt="icon_idea"
                  src={icon_idea}
                />
              </h2>
            </div>

            <p
              className="content"
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.3`}
            >
              We dig deep to reveal the distinctive qualities of our clients and
              then approach the task in hand. We look at things through the
              perspective of your customers and learn to speak their language
              across all media platforms. We help you identify a strategic path
              tailored to ensure the growth of your brand. Our aim is to make
              your audience try something new, engage with your brand- laugh,
              become aware, feel smart or just simply care.
            </p>
          </article>

          <article className="content-with-heading-item">
            <div className="heading-with-icon">
              <h2
                className="heading"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.19`}
              >
                <Image
                  width="50"
                  height="50"
                  priority
                  className="icon"
                  alt="icon_strategy"
                  src={icon_strategy}
                />
                STRATEGY
              </h2>
            </div>

            <p
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.3`}
              className="content"
            >
              Brands aren&#39;t just standalone entities that exist in our
              heads, they&#39;re as much human as we are and we understand this.
              Through our need for flux, dynamism and innovation, we explore the
              brand to give it a personality that stands out. We don&#39;t build
              castles in the air, but if we decide one day, we&#39;re sure
              we&#39;ll find a way to do that because as a team, our core
              strengths lie in executing our ideas as much as thinking
              laterally.
            </p>
          </article>

          <article className="content-with-heading-item">
            <div className="heading-with-icon">
              <h2
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.19`}
                className="heading"
              >
                EXECUTION
                <Image
                  width="50"
                  height="50"
                  priority
                  className="icon"
                  alt="icon_execution"
                  src={icon_execution}
                />
              </h2>
            </div>
            <p
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.3`}
              className="content"
            >
              Our need for innovative brand building does not indicate that our
              focus on ensuring your business goals are met is any less. No
              business can exist without concrete results of any brand building
              activity. Our endeavor is to realize the goals that you have set
              for your business through the best and the most innovative
              channels of marketing.
            </p>
          </article>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
