import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2 data-animname="fade-in-up" data-onetime="true" data-delay={`.1`}>
        CONTACT US{" "}
      </h2>

      <div className={styles.contact_details_container}>
        <h4 data-animname="fade-in-up" data-onetime="true" data-delay={`.3`}>
          Yash Kumar (Co-Founder):
        </h4>
        <p data-animname="fade-in-up" data-onetime="true" data-delay={`.35`}>
          <a href="mailto:ceo_yash@adomoto.in">ceo_yash@adomoto.in</a> |{" "}
          <a href="tel:+918527567283">+91 8527567283</a>
        </p>
        <h4 data-animname="fade-in-up" data-onetime="true" data-delay={`.4`}>
          Kirti Yadav (Co-Founder):
        </h4>
        <p data-animname="fade-in-up" data-onetime="true" data-delay={`.45`}>
          <a href="mailto:kirti@adomoto.in">kirti@adomoto.in</a> |{" "}
          <a href="tel:+918586878974">+91 8586878974</a>
        </p>
        <h4 data-animname="fade-in-up" data-onetime="true" data-delay={`.5`}>
          HR Enquiry:
        </h4>
        <p data-animname="fade-in-up" data-onetime="true" data-delay={`.55`}>
          <a href="mailto:ceo_yash@adomoto.in">careers@adomoto.in</a> |{" "}
          {/* <a href="tel:+919750003072">+91 9750003072</a> */}
        </p>
      </div>

      <br />
      <Link href="/contact" passHref>
        <a>
          <Button
            variant="contained"
            color="warning"
            disableElevation
            data-animname="fade-in-up"
            data-onetime="true"
            data-delay={`.5`}
            sx={{
              background: "#111",
              ":hover": {
                background: "#222",
                color: "#ffd800",
              },
            }}
          >
            Get Quotes
          </Button>
        </a>
      </Link>

      <address data-animname="fade-in-up" data-onetime="true" data-delay={`.6`}>
      634 Ground floor, West Parmanand Colony, GTB Nagar New Delhi - 110009
      </address>
    </section>
  );
};

export default Contact;
