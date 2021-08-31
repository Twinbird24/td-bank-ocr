const { readFile } = require('fs/promises')
const entryArrayToCells = require('./utils/entryArrayToCells')

const OcrNumberReader = async (file) => {
  const fileContents = await readFile(file, { encoding: "utf8" })
  const fileContentArray = fileContents.toString().split('\n')
  const numberCells = entryArrayToCells(fileContentArray)

  return numberCells
}

module.exports = OcrNumberReader;
