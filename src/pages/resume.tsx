import React from "react";
import Layout from "@theme/Layout";
import "./resume.scss";

const Resume = () => {
  return (
    <Layout
      title="Resume"
      description="Joseph Karasek - Lead Engineer and Design Technologist"
    >
      <main className="resume">
        <div className="resume__header">
          <h1 className="resume__name">Joseph Karasek</h1>
          <p className="resume__title">Lead Engineer and Design Technologist</p>
          <div className="resume__contact">
            <a href="mailto:joseph.karasek@gmail.com">joseph.karasek@gmail.com</a>
            <a href="https://www.linkedin.com/in/joekarasek" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <section className="resume__section">
          <h2 className="resume__section-title">Professional Experience</h2>
          
          <div className="resume__job">
            <div className="resume__job-header">
              <h3 className="resume__job-title">Lead Engineer and Platform Owner</h3>
              <div className="resume__job-company">Nike</div>
              <div className="resume__job-dates">2021 – Present</div>
            </div>
            <div className="resume__job-content">
              <p>
                Technical lead for Nike's Design Systems team, responsible for overseeing all design systems at Nike, 
                including the Enterprise Design System, Consumer Tools Design System, and Podium Design System. 
                Led and owned the Enterprise Design System from concept to adoption across 200+ products and applications.
              </p>
              <ul>
                <li>Defined and drove a strategy to streamline Nike's design systems under a unified next-generation system and worked with stakeholders to plan the existing systems' adoption, migration, and end-of-life.</li>
                <li>Led the team in building a pilot beta version of the next-generation system using modern best practices and design patterns, which users will test in the next few months.</li>
                <li>Coordinated effective support and maintenance of the three existing design systems through significant business uncertainty and challenges by identifying trade-offs and anticipating challenges.</li>
                <li>Rebuilt all the build tooling and testing for the Podium Design System for the consumer-facing applications, including mono-repo structures, build pipelines, bundlers, documentation engines, and testing frameworks.</li>
                <li>Helped define an effective strategy for theming user experiences for "Win Now" campaign moments like the Summer Olympics and a long-term approach to providing customized marketing content through a server-driven UI system.</li>
                <li>Provided guidance and insight into design system practices, including governance, community engagement, adoption strategies, design evolution, component life cycles, and system design.</li>
                <li>Encouraged the professional growth of my team through mentorship, pair programming, delegation of work, knowledge sharing, and cultivation of a safe, supportive, and innovative culture that values action and ownership.</li>
                <li>Defined and drove a UI platform strategy to implement a scalable, extendable, and maintainable design system for Nike's enterprise business needs, driving business value through widescale adoption by thousands of engineers and designers within 3 years.</li>
                <li>Built the front-end architecture for the internal libraries and applications that made up the Enterprise Design System, including build tooling, technology stacks, and component/token API design patterns.</li>
                <li>Collaborated with product managers, designers, and engineers globally, working cross-functionally to foster adoption, offer support, and oversee more than 250 contributions to the design system.</li>
                <li>Led a team of engineers and designers in building and maintaining design system assets, including internal code libraries, custom-built web portals, and Figma UI kits.</li>
                <li>Facilitated over 20+ design thinking workshops to understand critical user needs, identify product growth opportunities, and establish product priorities.</li>
                <li>As acting project manager, I led team ceremonies, communicated with stakeholders, and tracked work against roadmaps. I identified adjustments and made tradeoffs to ensure consistent delivery of features and support.</li>
              </ul>
            </div>
          </div>

          <div className="resume__job">
            <div className="resume__job-header">
              <h3 className="resume__job-title">Senior Engineer</h3>
              <div className="resume__job-company">Streem</div>
              <div className="resume__job-dates">2020 – 2021</div>
            </div>
            <div className="resume__job-content">
              <ul>
                <li>Implemented a collaborative and scalable design system for an augmented reality platform and worked with design to rapidly prototype AR overlays.</li>
                <li>Owned the development of the company's front-end component library, including repository structure, tooling, documentation engine, design tokens, UI components, and delivery pipelines.</li>
                <li>Led design and product through a comprehensive interface audit to organize and define Streem's first design system.</li>
                <li>Mentored peers and stakeholders on the effective creation, maintenance, and scaling of a design system.</li>
                <li>Worked with design to rapidly prototype new UX features, including a guided dialogue tour for onboarding new users.</li>
              </ul>
            </div>
          </div>

          <div className="resume__job">
            <div className="resume__job-header">
              <h3 className="resume__job-title">Senior Engineer</h3>
              <div className="resume__job-company">Knapsack (formerly Basalt)</div>
              <div className="resume__job-dates">2017 – 2020</div>
            </div>
            <div className="resume__job-content">
              <p>
                Technical lead, consultant, developer, and subject matter expert for start-up to enterprise-level projects 
                specializing in design systems, front-end architecture, and build tooling.
              </p>
              <ul>
                <li>Co-architected Knapsack, a design systems documentation and management platform used by businesses such as T.Rowe Price, Edward Jones, and the Associated Press, setting the stage for venture capitalists' $7M investment.</li>
                <li>Provided technical leadership and consultation in setting up design systems, component libraries, static site generators, CSS architecture, web applications, and automated testing for numerous clients, including Pega Systems, Memorial Sloan Kettering, the City of Portland, Science Magazine, and Puppet.</li>
                <li>Audited existing systems and provided consultation on technical solutions in the context of business needs and available resources.</li>
                <li>Improved development experience through optimizing tooling, including linting, scripting, continuous integration and deployment, and automated testing.</li>
                <li>Mentored client developers, designers, and stakeholders on effective UI/UX development practices.</li>
                <li>Consulted clients as an official business partner of InVision's DSM (Design System Manager) product.</li>
              </ul>
            </div>
          </div>

          <div className="resume__job">
            <div className="resume__job-header">
              <h3 className="resume__job-title">Web Engineer</h3>
              <div className="resume__job-company">Hello World</div>
              <div className="resume__job-dates">2016 – 2018</div>
            </div>
            <div className="resume__job-content">
              <p>
                Engineer for a boutique design and development agency that serves small to medium-sized businesses and non-profits.
              </p>
              <ul>
                <li>Technical lead for the Tyson Steele account, which comprised delivering 60+ custom-built websites for dentists over 12 months. Mentored and supervised a junior engineer on delivering for this account.</li>
                <li>Built tooling, server provisioning scripts, and a templating pattern library to streamline, standardize, and expedite the creation of static websites.</li>
                <li>Worked with a team to build a comprehensive e-commerce platform in Drupal for buying and selling housing blueprints.</li>
                <li>Rebuilt and added features to an internal accounting and customer relationship tracking system built with PHP and SQL.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resume__section">
          <h2 className="resume__section-title">Education</h2>
          
          <div className="resume__education">
            <div className="resume__education-item">
              <h3 className="resume__education-degree">Master of Environmental Science and Management</h3>
              <div className="resume__education-school">Portland State University</div>
              <div className="resume__education-details">Magna cum Laude | 2014</div>
            </div>
            
            <div className="resume__education-item">
              <h3 className="resume__education-degree">Bachelor of Science, Environmental Studies</h3>
              <div className="resume__education-school">Washington University in St. Louis</div>
              <div className="resume__education-details">2009</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Resume;
