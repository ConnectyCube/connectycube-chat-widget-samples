import fs from "node:fs"
import path from "node:path"
import { createRequire } from "module"
const require = createRequire(import.meta.url)

const DIST_PATH = path.resolve("./dist/")

const manifest = require(path.join(DIST_PATH, ".vite/manifest.json"))
const mainFileName = manifest['index.html']['file']

fs.writeFileSync(path.join(DIST_PATH, '.config-files'), mainFileName, {  encoding: 'utf8' })