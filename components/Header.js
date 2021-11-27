import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    window.onscroll = () => {
      const { scrollY } = window;

      if (scrollY > 100)
        document.querySelector("header nav").classList.add("show-bg");
      else document.querySelector("header nav").classList.remove("show-bg");
    };
  }, []);

  return (
    <>
      <Head>
        <title>Adomoto</title>
        <meta name="description" content="This is Adomoto" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header>
        <nav>
          <div className="logo-container">
            <Link href="/">
              <a className="logo">
                <div>ADO</div>
                <div>MOTO</div>
              </a>
            </Link>
          </div>
          <div className="links-container">
            <Link href="/">
              <a className="main-link">Home</a>
            </Link>
            <Link href="/about">
              <a className="main-link">About</a>
            </Link>
            <Link href="/service">
              <a className="main-link">Service</a>
            </Link>
            <Link href="/newRoom">
              <a className="main-link">New Room</a>
            </Link>
            <Link href="/contact">
              <a className="main-link">Contact Us</a>
            </Link>
          </div>
          {/* <div className="logins-container"></div> */}
        </nav>
      </header>
    </>
  );
};

export default Header;
