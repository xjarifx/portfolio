import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

const appHtml = render()
const html = template.replace('<!--app-html-->', appHtml)

fs.writeFileSync(toAbsolute('dist/client/index.html'), html)
console.log('Pre-rendered: index.html')
