const themeConfig = {
    logo: <span>My Documentation</span>,
    project: {
      link: 'https://github.com/your-username/your-repo',
    },
    docsRepositoryBase: 'https://github.com/your-username/your-repo/blob/main',
    footer: {
      text: 'My Documentation Site',
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – My Documentation',
      }
    },
    search: {
      placeholder: 'Search documentation...',
    },
    sidebar: {
      defaultMenuCollapseLevel: 1,
      toggleButton: true,
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Documentation" />
        <meta property="og:description" content="Welcome to my documentation site" />
      </>
    ),
  }
  
  export default themeConfig