module.exports = {
  title: 'OCPeasy CLI',
  tagline: 'is an open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code on OpenShift.',
  url: 'https://www.ocpeasy.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.ico',
  organizationName: 'ocpeasy', // Usually your GitHub org/user name.
  projectName: 'ocpeasy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'OCPeasy',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/ocpeasy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/ocpeasy',
            },
            {
              label: 'Requesting a template',
              href: 'https://github.com/ocpeasy/ocpeasy-template-requests',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ocpeasy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OCPeasy`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ocpeasy/ocpeasy-website/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
