import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const handleHamClick = () => {
    const header = document?.querySelector("header");
    header.classList.toggle("hide-header");
  };

  useEffect(() => {
    const nav = document?.querySelector("header nav");
    window.onscroll = () => {
      const { scrollY } = window;

      if (scrollY > 100) nav.classList.add("show-bg");
      else nav.classList.remove("show-bg");
    };
  }, []);

  React.useEffect(() => {
    const header = document?.querySelector("header");

    header.classList.add("hide-header");
  }, []);

  return (
    <>
      <Head>
        <title>Adomoto</title>
        <meta
          name="description"
          content="We specialize in placing your business in the media, yielding
                impactful communication results, positioning you as the market
                leader, driving increased traffic to your website, improving
                your search rankings, promoting your products and services, and
                improving conversions of customers for your brand. We specialize
                in graphic design, development of high-quality websites,
                customized web applications, Amazing graphics video intro, and
                after effect logo at a reasonable cost, which helps you create
                an outstanding web presence that compliments your company&#39;s
                identity."
        />
        {/* <meta name="description" content="This is Adomoto" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="ham-menu-container">
        <button className="ham-icon" onClick={handleHamClick}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
              fill="currentColor"
            />
            <path
              d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
              fill="currentColor"
            />
            <path
              d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <header>
        <nav>
          <div className="logo-container">
            <Link href="/">
              <a
                className="logo"
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`0`}
              >
                <div>ADO</div>
                <div>MOTO</div>
              </a>
            </Link>
          </div>
          <div className="links-container">
            <Link href="/">
              <a
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.1`}
                className="main-link"
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.2`}
                className="main-link"
              >
                About
              </a>
            </Link>
            <Link href="/our-team">
              <a
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.3`}
                className="main-link"
              >
                Our Team
              </a>
            </Link>
            <Link href="/contact">
              <a
                data-animname="fade-in-up"
                data-onetime="true"
                data-delay={`.4`}
                className="main-link"
              >
                Contact Us
              </a>
            </Link>
          </div>
          {/* <div className="logins-container"></div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
