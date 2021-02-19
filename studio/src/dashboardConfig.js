export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '602f0dc0567e9810297130b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-qozvxqkg',
                  apiId: '08fea813-bdc9-49d6-b4db-cb749f37b252'
                },
                {
                  buildHookId: '602f0dc0ddd3b51570b13c86',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tzw1dsku',
                  apiId: '105b6247-1f6a-4348-abfe-38347caf825c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LeNubophile/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tzw1dsku.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
