// Runs after `vite build`: renders the React app to HTML and writes it into dist/index.html,
// so search engines and link previews get the full content without running JavaScript.
// Also adds structured data for the projects and FAQ, generated from the same data the page uses.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://shubhxm.vercel.app/'

const { render, projects, faqs } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

const appHtml = render()

const structured = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${SITE}#projects`,
      name: 'Projects by Shubham Kumar',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: p.title,
          description: p.description,
          url: p.link,
          creator: { '@id': `${SITE}#person` },
          keywords: p.technologies.join(', '),
        },
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}#faq`,
      mainEntity: faqs
        .filter((f) => typeof f.a === 'string')
        .map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
    },
  ],
}

const indexPath = path.join(root, 'dist/index.html')
let html = await readFile(indexPath, 'utf-8')

if (!html.includes('<div id="root"></div>')) throw new Error('prerender: #root placeholder not found')
html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
html = html.replace(
  '</head>',
  `  <script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\u003c')}</script>\n</head>`
)

await writeFile(indexPath, html)
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`prerender: wrote ${(appHtml.length / 1024).toFixed(1)} KB of HTML into dist/index.html`)
