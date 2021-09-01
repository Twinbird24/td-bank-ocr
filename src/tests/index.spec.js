const OcrNumberReader = require('../index.js')
const { readFile } = require('fs/promises')

it('reads a file of entires and outputs a file with a list of numbers', async () => {
  const singleEntry = '/Users/attila/Documents/projects/test-double/td-bank-ocr/src/examples/single-entry.txt'
  const outputFile = '/Users/attila/Documents/projects/test-double/td-bank-ocr/src/output/account-numbers.txt'
  const expectedOutput = '123456789'

  await OcrNumberReader(singleEntry)

  const fileContents = await readFile(outputFile, { encoding: "utf8" })

  expect(fileContents).toBe(expectedOutput)
})
