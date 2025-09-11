import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout
      title={`Home`}
      description="Joe Karasek - Technical Lead, Software Engineer, and Design Technologist at Nike"
    >
      <main className={`home ${isLoaded ? 'loaded' : ''}`}>
        <div className="banner">
          <div className="banner__text-wrapper">
            <h1 className="banner__name">
              <span className="banner__name--first">Joe</span>
              <span className="banner__name--last">Karasek</span>
            </h1>
            <div className="banner__titles">
              <h2 className="banner__title">Technical Lead</h2>
              <h2 className="banner__title banner__title--tight">Software Engineer</h2>
              <h2 className="banner__title banner__title--tight">Design Technologist</h2>
            </div>
          </div>
          <div className="banner__image-container">
            <img
              src="/img/joe-professional.png"
              alt="Joe Karasek - Technical Lead and Design Technologist"
              className="banner__image"
            />
            <div className="banner__image-glow"></div>
          </div>
        </div>
        
        <div className="intro">
          <h2 className="intro__title">
            <span className="intro__title--greeting">Hi, my name is</span>
            <span className="intro__title--name">Joe.</span>
          </h2>
          <div className="intro__content">
            <p>
              I currently work as a lead design engineer at{" "}
              <a 
                href="https://www.nike.com" 
                target="_blank" 
                rel="noreferrer"
                className="intro__link"
                aria-label="Visit Nike's website"
              >
                Nike
              </a>
              .
            </p>
            <p>
              I love working at the intersection of technology, design, and
              business. My mission is to empower creative professionals to build
              exceptional products quickly and confidently.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
