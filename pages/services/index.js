import React from "react";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import styles from "./index.module.scss";
import Image from "next/image";
import services from "../../public/images/services.png";

const services_comp = () => {
  return (
    <div className={styles.services}>
      <Header />

      <main>
        <div className="content-with-heading-container">
          <div className="content-with-heading-item">
            <h2 className="heading">SERVICES</h2>
          </div>

          <div className={styles.grid_container}>
          
            <div className={styles.grid_item}>
              <h3 className="heading-color">CREATIVE AND BRAND STRATEGY</h3>
              <p>Brand Identity & Positioning</p>
              <p>Development</p>
              <p>Photography</p>
              <p>Graphic Design</p>
              <p>Content Creation</p>
              <p>Videography</p>
            </div>
            <div className={styles.grid_item}>
              <h3 className="heading-color">SOCIAL MEDIA</h3>
              <p>Social Strategy and Campaign</p>
              <p>Management</p>
              <p>Social Ads</p>
              <p>Content Curation and Development</p>
              <p>Community Management</p>
              <p>Social Media Channel Management</p>
              <p>Influencer Outreach & Activation</p>
              <p>Reputation management</p>
            </div>
            <div className={styles.grid_item}>
              <h3 className="heading-color">PUBLIC RELATIONS</h3>

              <p>Public Relations Strategy & Planning</p>
              <p>Bloggers & Influencers Outreach</p>
              <p>Product Launches</p>
              <p>Media Relations</p>
              <p>Collaboration Events</p>
              <p>Crisis Communications</p>
              <p>Community Involvement</p>
            </div>
            <div className={styles.grid_item}>
              <h3 className="heading-color">DIGITAL MARKETING</h3>
              <p>Digital Strategy & Planning</p>
              <p>Website Development & Maintenance</p>
              <p>SEO and SEM</p>
              <p>User Experience (UX)</p>
              <p>Email Campaign Development & Automation</p>
              <p>Content Marketing</p>
              <p>App Marketing</p>
            </div>

            <div className={styles.grid_img_item}>
            <Image
              className={styles.gird_image}
              alt="services"
              src={services}
              objectFit="contain"
              // layout="responsive"
            />
            </div>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

export default services_comp;
