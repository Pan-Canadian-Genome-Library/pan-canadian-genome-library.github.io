import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Pan-Canadian Genome Library',
  tagline: 'Training & Documentation',
  favicon: 'img/leaf-only.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://pan-canadian-genome-library.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Pan-Canadian-Genome-Library', // Usually your GitHub org/user name.
  projectName: 'pan-canadian-genome-library.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'researcher',
          routeBasePath: 'researcher',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'clinician',
        path: 'clinician',
        routeBasePath: 'clinician',
        sidebarPath: './clinicianSidebars.ts',
      },
    ],
    [
         '@docusaurus/plugin-content-docs',
      {
        id: 'participant-public',
        path: 'participant-public',
        routeBasePath: 'participant-public',
        sidebarPath: './publicSidebars.ts',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/PCGL-TrainDocSite-Card.png',
    navbar: {
      title: 'PCGL Training & Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/leaf-only.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'For Researchers',
        },
        {to: '/clinician/overview', label: 'For Clinicians', position: 'left'},
        {to: '/participant-public/overview', label: 'For Participants & Public', position: 'left'},
        //Language dropdown commented out until French content provided
        //{
          //type: 'localeDropdown',
          //position: 'right',
        //},
        {
          href: 'https://genomelibrary.ca',
          label: 'PCGL',
          position: 'right',
        },
        {
          href: 'https://github.com/Pan-Canadian-Genome-Library',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'For Researchers',
              to: '/researcher/overview',
            },
            {
              label: 'For Clinicians',
              to: '/clinician/overview',
            },
            {
              label: 'For Participants & Public',
              to: '/participant-public/overview',
            },
          ],
        },
        {
          title: 'Connect with us',
          items: [
             {
              label: 'Contact PCGL',
              href: 'https://www.genomelibrary.ca/contact-us/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/genome-library/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Pan-Canadian-Genome-Library',
            },
          ],
        },
      ],
      copyright: `PCGL is supported by the Canadian Institutes of Health Research (CIHR). <br> Copyright © ${new Date().getFullYear()} Pan-Canadian Genome Library. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
