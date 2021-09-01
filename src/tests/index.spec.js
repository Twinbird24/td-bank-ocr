const OcrNumberReader = require('../index.js')
const { readFile } = require('fs/promises')
const path = require('path');

it('reads a file of entires and outputs a file with a list of numbers', async () => {
  const singleEntry = path.join(__dirname + '/../examples/single-entry.txt')
  const outputFile = path.join(__dirname + '/../output/account-numbers.txt')
  const expectedOutput = '123456789'

  await OcrNumberReader(singleEntry)

  const fileContents = await readFile(outputFile, { encoding: "utf8" })

  expect(fileContents).toBe(expectedOutput)
})
