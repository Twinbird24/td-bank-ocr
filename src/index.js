const { readFile, writeFile } = require('fs/promises')
const path = require('path');
const entryArrayToCells = require('./utils/entryArrayToCells')
const convertDigitToSingleNumber = require('./utils/convertDigitToSingleNumber')

const convertEntryIntoNumbers = (entryArray) => {
  const digitCells = entryArrayToCells(entryArray)
  const numbersArr = digitCells.map(convertDigitToSingleNumber)
  return numbersArr.reduce((acc, curr) => acc + curr)
}

const OcrNumberReader = async (file) => {
  const outputFile = path.join(__dirname + '/output/account-numbers.txt')
  const entryFile = await readFile(file, { encoding: "utf8" })
  const entiresArrayByLine = entryFile.toString().split('\n')
  const entryLineHeight = 4
  let numbers = ''

  for (let i = 0; i < entiresArrayByLine.length; i+=entryLineHeight) {
    const number = convertEntryIntoNumbers(entiresArrayByLine.slice(i, i+entryLineHeight))
    numbers += `${number}\n`
  }

  await writeFile(outputFile, numbers.trim(), { encoding: "utf8" });
}

module.exports = OcrNumberReader;
