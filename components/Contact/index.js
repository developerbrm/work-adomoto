import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h2>CONTACT US </h2>

      <div className={styles.contact_details_container}>
        <h4>Yash Kumar (Co-Founder):</h4>
        <p>
          <a href="mailto:yash@adomoto.com">yash@adomoto.com</a> |{" "}
          <a href="tel:+919999705223">+91 9999705223</a>
        </p>
        <h4>Kriti Pal Yadav (Co-Founder):</h4>
        <p>
          <a href="mailto:kriti@adomoto.com">kriti@adomoto.com</a> |{" "}
          <a href="tel:+918883877774">+91 8883877774</a>
        </p>
        <h4>HR Enquiry:</h4>
        <p>
          <a href="mailto:careers@adomoto.com">careers@adomoto.com</a> |{" "}
          <a href="tel:+919750003072">+91 9750003072</a>
        </p>
      </div>

      <br />
      <Button
        variant="contained"
        color="warning"
        disableElevation
        sx={{
          background: "#111",
          ":hover": {
            background: "#222",
            color: "#ffd800",
          },
        }}
      >
        <Link href="/contact">
          <a>Get Quotes</a>
        </Link>
      </Button>

      <address>
        634 Ground floor, West Parmanand, Model Town , Delhi 110009
      </address>
    </section>
  );
};

export default Contact;
