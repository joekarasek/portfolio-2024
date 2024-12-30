import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  future: {
    experimental_faster: true,
  },
  title: "Joseph Karasek",
  tagline: "Software Engineer and Design Technologist",
  favicon: "img/favicon.ico",
  url: "https://www.joekarasek.com",
  baseUrl: "/",
  organizationName: "joekarasek", // Usually your GitHub org/user name.
  projectName: "Web Portfolio 2024", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: ["docusaurus-plugin-sass"],

  presets: [
    [
      "classic",
      {
        docs: {
          path: "./projects",
          routeBasePath: "/projects",
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/index.scss",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Home",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        {
          type: "docSidebar",
          sidebarId: "projectsSidebar",
          position: "left",
          label: "Projects",
        },
        { to: "/blog", label: "Articles", position: "left" },
        { to: "/recommendations", label: "Recommendations", position: "left" },
        {
          href: "mailto:joseph.karasek@gmail.com",
          label: "Email",
          position: "right",
        },
        {
          href: "https://github.com/joekarasek",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://www.linkedin.com/in/joekarasek",
          label: "Linkedin",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Site",
          items: [
            {
              label: "Projects",
              to: "/projects/intro",
            },
            {
              label: "Articles",
              to: "/blog",
            },
            {
              label: "Reviews",
              // todo fix this link
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Linkedin",
              href: "https://linkedin.com/in/joekarasek",
            },
            {
              label: "Slack - Design Systems",
              href: "https://design-systems.slack.com/team/U01QNRCNKSL",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
            {
              label: "Email",
              href: "mailto:joseph.karasek@gmail.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus 🦖.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
