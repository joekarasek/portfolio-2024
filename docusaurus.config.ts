import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  future: {
    experimental_faster: true,
    v4: true,
  },
  title: "Joseph Karasek",
  tagline: "Software Engineer and Design Technologist",
  favicon: "img/favicon.ico",
  url: "https://www.joekarasek.com",
  baseUrl: "/",
  organizationName: "joekarasek", // Usually your GitHub org/user name.
  projectName: "Web Portfolio 2024", // Usually your repo name.

  onBrokenLinks: "warn",
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
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/index.scss",
        },
        googleAnalytics: {
          trackingID: "G-PYKH289910",
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "joekarasek.com",
      // logo: {
      //   alt: "My Site Logo",
      //   src: "img/logo.svg",
      // },
      items: [
        { to: "/blog", label: "Writings", position: "left" },
        { to: "/about-me", label: "About Me", position: "left" },
        { to: "/resume", label: "Resume", position: "left" },
        { to: "/style-guide", label: "Style Guide", position: "left" },
        { to: "/place-holder", label: "Connect", position: "right" },
      ],
    },
    footer: {
      links: [
        {
          title: "Site",
          items: [
            { to: "/blog", label: "Writings" },
            { to: "/about-me", label: "About Me" },
            { to: "/resume", label: "Resume" },
            { to: "/style-guide", label: "Style Guide" },
          ],
        },
        {
          title: "Get In Touch",
          items: [
            {
              href: "mailto:joseph.karasek@gmail.com",
              label: "Email",
            },
            {
              href: "https://www.linkedin.com/in/joekarasek",
              label: "LinkedIn",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
