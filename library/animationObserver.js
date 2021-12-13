const animationObserver = () => {
  //Intersection observer for animations-----------------------------------------------------------
  let optionsForAnimations = {
    threshold: [...Array(10)].map(
      (_, index, arr) => ((index + 1) * 1) / arr.length
    ),
    rootMargin: "100px 0px 0px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    // console.log("ran");

    entries.forEach((entry) => {
      const { delay, animname, onetime, animtiming, timingfunction } =
        entry.target.dataset;

      if (entry.intersectionRatio > 0) {
        entry.target.style.animation = `${animname} ${animtiming || 0.5}s ${
          timingfunction || `ease`
        } ${delay || 0}s forwards`;
      } else if (onetime) return;
      else {
        entry.target.style.animation = `none`;
      }
    });
  }, optionsForAnimations);

  const prepareAnimation = (element) => {
    const { animname } = element.dataset;
    element.classList.add(animname);
  };

  const selectors = [`[data-animname]`];

  selectors.forEach((selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
      if (!element) return;

      prepareAnimation(element);
      observer.observe(element);
    });
  });
};

export default animationObserver;
