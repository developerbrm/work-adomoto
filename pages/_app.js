import "../styles/animations.scss";
import animationObserver from "../library/animationObserver";
import "../styles/globals.scss";
import React from "react";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    animationObserver();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
