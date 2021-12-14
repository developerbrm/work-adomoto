import React from "react";
import Contact from "../../components/Contact";
import styles from "./our-clients.module.scss";
import Image from "next/image";
import about from "../../public/images/about.png";
import client1 from "../../public/images/clients/1.png";
import client2 from "../../public/images/clients/2.png";
import client3 from "../../public/images/clients/3.png";
import Header from "../../components/Header";
import animationObserver from "../../library/animationObserver";

const OurTeam = () => {
  const clientsData = [
    {
      image: client1,
      des: "Bob’s Den is a new player that serves an assortment of quick bites! While we seldom fall in love with a new cafe in the first go, Bob’s Den gives all the reasons to have us obsessing over it in the beginning itself!",
    },
    {
      image: client2,
      des: "VISHWAS GROUP was found with the vision and enterprise of Practicing Chartered Accountants, in a modest scale in 1996 in New Delhi. It initiated with just one activity and later carved roads into various fields. A decade of Commitment, Professional Integrity, and vision helped VISHWAS to achieve good position in its field. Over the past of more than one decade, VISHWAS Group has involved as a veritable link between industry, finance and people. The Group is promoted by highly qualified and experienced professionals from the field of finance, banking and industry to analyze your needs and provide expert advice in the capital and commodity market.",
    },
    {
      image: client3,
      des: "Fit fuel Cafe is the ultimate destination for gym freak and a foodie. People who wants to stay in shape but don't want to compromise on their diet.",
    },
  ];

  React.useEffect(() => {
    animationObserver();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.our_clients}>
        <div className="content-with-heading-container">
          <div className="content-with-heading-item">
            <h2
              className="heading"
              data-animname="fade-in-up"
              data-onetime="true"
              data-delay={`.1`}
            >
              OUR CLIENTS{" "}
            </h2>
          </div>
        </div>

        <div className={styles.clients_grid_container}>
          {clientsData.map(({ image, des }, index) => (
            <div key={index} className={styles.client_item}>
              <div
                className={styles.img_container}
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`${index * 0.05}`}
              >
                <Image src={image} alt="" objectFit="cover" />
              </div>
              <p
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`${index * 0.15}`}
              >
                {des}
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
