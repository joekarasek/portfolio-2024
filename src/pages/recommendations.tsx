import React from "react";
import Layout from "@theme/Layout";
import { AvatarBlock } from "../components/AvatarBlock";
import { RecommendationCard } from "../components/RecommendationCard";

const RecommendationsPage = () => {
  return (
    <Layout title="Recommendations">
      <main className="recommendations margin-top--responsive-xl margin-bottom--responsive-xl">
        <div>
          <h2 className="highlights__title">Recommendations</h2>
          <p>
            Here are some recommendations from past co-workers and clients. You
            can find the full recommendations, as well as more, on my{" "}
            <a href="https://www.linkedin.com/in/joe-karasek/details/recommendations/">
              LinkedIn Recommendations page.
            </a>
          </p>
        </div>
        <div className="recommendations__stack">
          <RecommendationCard>
            <AvatarBlock
              name="Evan Lovely"
              title="CTO of Knapsack"
              link="https://www.linkedin.com/in/evanlovely/"
              image="/avatars/evan-lovely.jpeg"
              linkedin="https://www.linkedin.com/in/evanlovely/"
            />
            <p>
              Joe is born to solve puzzles & one of the most naturally gifted
              engineers I&#39;ve worked with across my career. His passion is
              palpable & it really shows in his work.
            </p>
            <p>
              Equally gifted in the technical & the business aspects of
              consulting, he&#39;d surely be a strong benefit to any team.
            </p>
            <p>
              A pleasure to work with, he always ensures the whole team works as
              best as they can by always reaching out to help out in thoughtful
              ways that is felt in team cohesion and project efficacy.
            </p>
            <a href="https://www.linkedin.com/in/joe-karasek/details/recommendations/">
              Read the full recommendation
            </a>
          </RecommendationCard>
          <RecommendationCard>
            <AvatarBlock
              name="Hakan Gulgonul"
              title="Lead Technical Product Manager at Nike"
              link="https://www.linkedin.com/in/hakangulgonul/"
              image="/avatars/hakan-gulgonul.jpeg"
              linkedin="https://www.linkedin.com/in/hakangulgonul/"
            />
            <p>
              Joe is an incredibly strong, knowledgeable, and experienced
              leader.
            </p>
            <p>
              The first iteration of the design system was delivered at a record
              pace.
            </p>
            <p>
              I’ve never worked with a lead who is so respected and loved by his
              team.
            </p>
            <a href="https://www.linkedin.com/in/joe-karasek/details/recommendations/">
              Read the full recommendation
            </a>
          </RecommendationCard>
          <RecommendationCard>
            <AvatarBlock
              name="Matthew Beck"
              title="Lead Technical Product Manager at Nike"
              link="https://www.linkedin.com/in/hakangulgonul/"
              image="/avatars/matt-beck.jpeg"
              linkedin="https://www.linkedin.com/in/hakangulgonul/"
            />
            <p>
              Joe&#39;s an invaluable pinch-hitter, and subject matter expert on
              the integration of design systems as well as all things React.
            </p>
            <p>
              One of the few people I am truly comfortable handing my own
              projects off to. Joe is a skilled and knowledgeable developer and
              technologist.
            </p>
            <p>
              He&#39;s smart, friendly, capable and easy to work with. I would
              hire him myself for any future team I were building.
            </p>
            <a href="https://www.linkedin.com/in/joe-karasek/details/recommendations/">
              Read the full recommendation
            </a>
          </RecommendationCard>
        </div>
      </main>
    </Layout>
  );
};

export default RecommendationsPage;
