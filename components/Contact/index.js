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
        <p>yash@adomoto.com | +91 9999705223</p>
        <h4>Kriti Pal Yadav (Co-Founder):</h4>
        <p>kriti@adomoto.com | +91 8883877774</p>
        <h4>HR Enquiry:</h4>
        <p>careers@adomoto.com | 9750003072</p>
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
            color: "#ffd800"
          }
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
