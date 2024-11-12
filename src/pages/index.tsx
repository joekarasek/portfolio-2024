// import clsx from "clsx";
// @todo use the Docusaurus link throughout custom code
// import Link from "@docusaurus/Link";
// import Heading from "@theme/Heading";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { HomepageBannerSection } from "@site/src/sections/HomepageBannerSection/HomepageBannerSection";
import { HomepageIntroSection } from "@site/src/sections/HomepageIntroSection/HomepageIntroSection";
import { HomepageSkillsSection } from "@site/src/sections/HomepageSkillsSection/HomepageSkillsSection";
import { HomepageHighlightsSection } from "@site/src/sections/HomepageHighlightsSection/HomepageHighlightsSection";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="home">
        <HomepageBannerSection />
        <HomepageIntroSection />
        <HomepageSkillsSection />
        <HomepageHighlightsSection />
      </main>
    </Layout>
  );
};

export default Home;
