import fs from "node:fs"
import path from "node:path"
import { createRequire } from "module"
const require = createRequire(import.meta.url)

const DIST_PATH = path.resolve("./dist/angular/browser")

const manifest = require(path.join(DIST_PATH, "stats.json"))["outputs"]
const mainFileName = Object.keys(manifest).find(fileNameKey => {
  if (manifest[fileNameKey]["entryPoint"] === "src/main.ts") {
    return fileNameKey
  }
})

fs.writeFileSync(path.join(DIST_PATH, '.config-files'), mainFileName, {  encoding: 'utf8' })
