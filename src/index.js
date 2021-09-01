const { readFile } = require('fs/promises')
const entryArrayToCells = require('./utils/entryArrayToCells')
const convertDigitToSingleNumber = require('./utils/convertDigitToSingleNumber')

const OcrNumberReader = async (file) => {
  const fileContents = await readFile(file, { encoding: "utf8" })
  const fileContentArray = fileContents.toString().split('\n')
  const digitCells = entryArrayToCells(fileContentArray)
  const numbers = digitCells.map(digit => convertDigitToSingleNumber(digit))

  return numberCells
}

module.exports = OcrNumberReader;
