import React from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownArticle = ({params, post}) => {
  const link = params.link
  let markdownContent = ''
  if (
    link === 'comment-faire-un-configurateur-3d-sur-three-fiber-et-next-js-13'
  ) {
    markdownContent = articles[post?.number].content
  }
  return (
    <div id="mainmd">
      <div id="contentmd">
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownArticle

const articles = [
  {
    content:
      '# Je refais de le site de tesla en mieux !' +
      '\n' +
      '## Step 1 : Analyse du site' +
      '\n' +
      '```bash\n' +
      'npm run dev\n' +
      '# or\n' +
      'yarn dev\n' +
      '# or\n' +
      'pnpm dev\n' +
      '```\n' +
      '\n' +
      'Open [http://localhost:3000](http://localhost:3000) with your browser to see the\n' +
      'result.\n' +
      '\n' +
      'You can start editing the page by modifying `app/page.js`. The page auto-updates\n' +
      'as you edit the file.\n' +
      '\n' +
      '[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on\n' +
      '[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This\n' +
      'endpoint can be edited in `pages/api/hello.js`.\n' +
      '\n' +
      'The `pages/api` directory is mapped to `/api/*`. Files in this directory are\n' +
      'treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead\n' +
      'of React pages.\n' +
      '\n' +
      'This project uses\n' +
      '[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to\n' +
      'automatically optimize and load Inter, a custom Google Font.\n' +
      '\n' +
      '## Learn More\n' +
      '\n' +
      'To learn more about Next.js, take a look at the following resources:\n' +
      '\n' +
      '- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js\n' +
      '  features and API.\n' +
      '- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n' +
      '\n' +
      'You can check out\n' +
      '[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your\n' +
      'feedback and contributions are welcome!\n' +
      '\n' +
      '## Deploy on Vercel\n' +
      '\n' +
      'The easiest way to deploy your Next.js app is to use the\n' +
      '[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)\n' +
      'from the creators of Next.js.\n' +
      '\n' +
      'Check out our\n' +
      '[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more\n' +
      'details.\n' +
      '\n' +
      '# Portfolio-Andrea-Nextjs',
  },
  {
    content:
      'This is a [Next.js](https://nextjs.org/) project bootstrapped with ' +
      '[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).\n' +
      '\n' +
      '## Getting Started\n' +
      '\n' +
      'First, run the development server:\n' +
      '\n' +
      '```bash\n' +
      'npm run dev\n' +
      '# or\n' +
      'yarn dev\n' +
      '# or\n' +
      'pnpm dev\n' +
      '```\n' +
      '\n' +
      'Open [http://localhost:3000](http://localhost:3000) with your browser to see the\n' +
      'result.\n' +
      '\n' +
      'You can start editing the page by modifying `app/page.js`. The page auto-updates\n' +
      'as you edit the file.\n' +
      '\n' +
      '[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on\n' +
      '[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This\n' +
      'endpoint can be edited in `pages/api/hello.js`.\n' +
      '\n' +
      'The `pages/api` directory is mapped to `/api/*`. Files in this directory are\n' +
      'treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead\n' +
      'of React pages.\n' +
      '\n' +
      'This project uses\n' +
      '[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to\n' +
      'automatically optimize and load Inter, a custom Google Font.\n' +
      '\n' +
      '## Learn More\n' +
      '\n' +
      'To learn more about Next.js, take a look at the following resources:\n' +
      '\n' +
      '- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js\n' +
      '  features and API.\n' +
      '- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.\n' +
      '\n' +
      'You can check out\n' +
      '[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your\n' +
      'feedback and contributions are welcome!\n' +
      '\n' +
      '## Deploy on Vercel\n' +
      '\n' +
      'The easiest way to deploy your Next.js app is to use the\n' +
      '[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)\n' +
      'from the creators of Next.js.\n' +
      '\n' +
      'Check out our\n' +
      '[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more\n' +
      'details.\n' +
      '\n' +
      '# Portfolio-Andrea-Nextjs',
  },
]
