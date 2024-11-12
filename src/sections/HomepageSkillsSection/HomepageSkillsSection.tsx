const skillCardContent = [
  {
    title: "Web Engineering",
    description: "lorem",
  },

  {
    title: "Software Architecture",
    description: "lorem",
  },

  {
    title: "Tooling",
    description: "lorem",
  },

  {
    title: "Design Systems",
    description: "lorem",
  },

  {
    title: "Design Tokens",
    description: "lorem",
  },

  {
    title: "Strategic Technical Planning",
    description: "lorem",
  },

  {
    title: "Project Management",
    description: "lorem",
  },

  {
    title: "Product Ownership and Leadership",
    description: "lorem",
  },

  {
    title: "Mentorship",
    description: "lorem",
  },
];

interface HomepageSkillCardProps {
  title: string;
  description: string;
}

const HomepageSkillCard: React.FC<HomepageSkillCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="skill-card">
      <h2 className="skill-card__title">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export const HomepageSkillsSection = () => (
  <>
    <div className="skills-intro">
      <h2 className="skills-intro__title">What I Enjoy Working On</h2>
      <p>
        My biggest passion is to help teams and businesses have big wins. And
        I&apos;m willing to jump in where needed to make that happen.
      </p>
    </div>
    <div className="skills-grid">
      {skillCardContent.map((item) => (
        <HomepageSkillCard
          key={item.title}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </>
);
