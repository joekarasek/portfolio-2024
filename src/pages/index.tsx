// import clsx from "clsx";
// @todo use the Docusaurus link throughout custom code
// import Link from "@docusaurus/Link";
// import Heading from "@theme/Heading";
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import { HomepageSkillsSection } from "@site/src/sections/HomepageSkillsSection/HomepageSkillsSection";
// import { HomepageHighlightsSection } from "@site/src/sections/HomepageHighlightsSection/HomepageHighlightsSection";

const Home = () => {
  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="home">
        <div className="banner">
          <div className="banner__text-wrapper">
            <h1 className="banner__name">Joe Karasek</h1>
            <h2 className="banner__title">Software Engineer</h2>
            <h2 className="banner__title">Design Technologist</h2>
          </div>
          <img
            src="/img/joe-professional.png"
            alt="Joe Karasek"
            className="banner__image"
          />
        </div>
        <div className="intro">
          <h2 className="intro__title">Hi, my name is Joe.</h2>
          <p>
            I currently work as a lead design engineer at{" "}
            <a href="https://www.nike.com" target="_blank" rel="noreferrer">
              Nike{" "}
            </a>
            .
          </p>
          <p>
            I love working at the intersection of technology, design, and
            business. My mission is to empower creative professionals to build
            exceptional products quickly and confidently.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
