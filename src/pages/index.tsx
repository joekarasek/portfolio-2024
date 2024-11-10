// import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
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
        <div className="skills-intro">
          <h2 className="skills-intro__title">What I Enjoy Working On</h2>
          <p>
            My biggest passion is to help teams and businesses have big wins.
            And I&apos;m willing to jump in where needed to make that happen.
          </p>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <h3 className="skill-card__title">Web Engineering</h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Software Architecture</h3>
            <p>
              I have experience designing, building, and working with
              large-scale systems, and am confident working with both monolithic
              and microservice architectures.
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Tooling</h3>
            <p>
              I love building tools that help teams work more effeciently.
              Setting up and maintaing build pipelines, CI/CS, automated testing
              and linting.
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Design Systems</h3>
            <p>
              Design systems Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Aliquid assumenda, atque commodi consequuntur dolor dolorum
              eveniet exercitationem maiores minima, necessitatibus, nesciunt
              perspiciatis quaerat qui. Amet libero praesentium quasi ut
              voluptatum!
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Design Tokens</h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Strategic Technical Planning</h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Project Management</h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">
              Product Ownership and Leadership
            </h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
          <div className="skill-card">
            <h3 className="skill-card__title">Mentorship</h3>
            <p>
              I have experience in full-stack web engineering with a focus on
              building front-end applications. I enjoy working with modern
              frameworks like React and NextJS, as well as with underlying core
              technologies like HTML, CSS, and JS,
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
