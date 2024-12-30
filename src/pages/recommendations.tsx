import React from "react";
import Layout from "@theme/Layout";
import { AvatarBlock } from "../components/AvatarBlock";

const RecommendationsPage = () => {
  // @ts-ignore
  return (
    <Layout title="Recommendations">
      <main className="home">
        <div className="highlights">
          <h2 className="highlights__title">Recommendations</h2>
          <p>I take pride in delivering high quality work.</p>
          <p>Here are some recommendations from past co-workers and clients.</p>
        </div>
        <div className="highlights-stack">
          <div className="highlight-card">
            <AvatarBlock
              name="Hakan Gulgonul"
              title="Lead Technical Product Manager at Nike"
              link="https://www.linkedin.com/in/hakangulgonul/"
              image="https://media.licdn.com/dms/image/v2/C5603AQE8tqn4Wwc6TQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629419518183?e=1736985600&v=beta&t=s0jMdyn8GOe8joOKpArlqgqvfsM20mXBhkUoU7Gvlgs"
              linkedin="https://www.linkedin.com/in/hakangulgonul/"
            />
            <p className="highlight-card__description">
              Joe is an incredibly strong, knowledgeable, and experienced
              leader... The first iteration of the design system was delivered
              at a record pace... I’ve never worked with a lead who is so
              respected and loved by his team.
            </p>
          </div>
          <div className="highlight-card">
            <AvatarBlock
              name="Evan Lovely"
              title="CTO of Knapsack"
              link="https://www.linkedin.com/in/evanlovely/"
              image="https://avatars.githubusercontent.com/u/569699?v=4"
              linkedin="https://www.linkedin.com/in/evanlovely/"
            />
            <p className="highlight-card__description">
              Joe is born to solve puzzles & one of the most naturally gifted
              engineers I've worked with across my career. His passion is
              palpable & it really shows in his work. Equally gifted in the
              technical & the business aspects of consulting, he'd surely be a
              strong benefit to any team. A pleasure to work with, he always
              ensures the whole team works as best as they can by always
              reaching out to help out in thoughtful ways that is felt in team
              cohesion and project efficacy.
            </p>
          </div>
          <div className="highlight-card">
            <AvatarBlock
              name="Matthew Beck"
              title="Lead Technical Product Manager at Nike"
              link="https://www.linkedin.com/in/hakangulgonul/"
              image="https://media.licdn.com/dms/image/v2/C5603AQE8tqn4Wwc6TQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629419518183?e=1736985600&v=beta&t=s0jMdyn8GOe8joOKpArlqgqvfsM20mXBhkUoU7Gvlgs"
              linkedin="https://www.linkedin.com/in/hakangulgonul/"
            />
            <p className="highlight-card__description">
              Joe&#39;s an invaluable pinch-hitter, and subject matter expert on
              the integration of design systems as well as all things React...
              One of the few people I am truly comfortable handing my own
              projects off to. Joe is a skilled and knowledgeable developer and
              technologist. He&#39;s smart, friendly, capable and easy to work
              with. I would hire him myself for any future team I were building.
            </p>
          </div>
          <div className="highlight-card">
            <AvatarBlock
              name="Hakan Gulgonul"
              title="Lead Technical Product Manager at Nike"
              link="https://www.linkedin.com/in/hakangulgonul/"
              image="https://media.licdn.com/dms/image/v2/C5603AQE8tqn4Wwc6TQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1629419518183?e=1736985600&v=beta&t=s0jMdyn8GOe8joOKpArlqgqvfsM20mXBhkUoU7Gvlgs"
              linkedin="https://www.linkedin.com/in/hakangulgonul/"
            />
            <p className="highlight-card__description">
              Joe is an incredibly strong, knowledgeable, and experienced
              leader... The first iteration of the design system was delivered
              at a record pace... I’ve never worked with a lead who is so
              respected and loved by his team.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default RecommendationsPage;
