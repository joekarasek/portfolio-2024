// import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageSkillsSection } from "@site/src/sections/HomepageSkillsSection/HomepageSkillsSection";
// import HomepageFeatures from "@site/src/sections/HomepageFeatures";
// import Heading from "@theme/Heading";

// import "./index.scss";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="home">
        <div className="banner">
          <div className="banner__text-wrapper">
            <h1 className="banner__name">Joe Karasek</h1>
            <h2 className="banner__title">Software Engineer</h2>
            <h2 className="banner__title">Design Technologist</h2>
          </div>
          <img src="/img/me.jpg" alt="Joe Karasek" className="banner__image" />
        </div>

        <div className="intro">
          <h2 className="intro__title">Hi, my name is Joe.</h2>
          <p>I&apos;m a software engineer and design technologist.</p>
          <p>
            I currently work at{" "}
            <a href="https://www.nike.com" target="_blank" rel="noreferrer">
              Nike{" "}
            </a>
            as a lead software engineer on the design systems team.
          </p>
          <p>
            I bring a wealth of Knowledge and experience to the table, with more
            than 10 years working on web applications and design systems. I love
            working at the intersection of technology, design, and business. My
            mission is to empower all creative types (designers, developers,
            product managers, etc.) to build great products with spedd and
            confidence.
          </p>
        </div>
        <HomepageSkillsSection />
      </main>
    </Layout>
  );
};

export default Home;
