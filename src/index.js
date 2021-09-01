const { readFile, writeFile } = require('fs/promises')
const path = require('path');
const entryArrayToCells = require('./utils/entryArrayToCells')
const convertDigitToSingleNumber = require('./utils/convertDigitToSingleNumber')

const OcrNumberReader = async (file) => {
  const outputFile = path.join(__dirname + '/output/account-numbers.txt')

  const fileContents = await readFile(file, { encoding: "utf8" })
  const fileContentArray = fileContents.toString().split('\n')
  const digitCells = entryArrayToCells(fileContentArray)
  const numbersArr = digitCells.map(digit => convertDigitToSingleNumber(digit))
  const numbers = numbersArr.reduce((acc, curr) => acc + curr)

  await writeFile(outputFile, numbers, { encoding: "utf8" });
}

module.exports = OcrNumberReader;
