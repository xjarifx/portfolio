import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const routes = ['/']

for (const route of routes) {
  const appHtml = render(route)
  const html = template.replace('<!--app-html-->', appHtml)
  const outDir = route === '/' ? 'dist/client' : `dist/client${route}`
  fs.mkdirSync(toAbsolute(outDir), { recursive: true })
  fs.writeFileSync(toAbsolute(`${outDir}/index.html`), html)
  console.log(`Pre-rendered: ${route}`)
}
