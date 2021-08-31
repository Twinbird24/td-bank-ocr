const OcrNumberReader = require('../index.js')

it('reads a file of entires and outputs a file with a list of numbers', async () => {
  const singleEntry = '/Users/attila/Documents/projects/test-double/td-bank-ocr/src/examples/single-entry.txt'
  const expectedOutput = '123456789'

  const fileContents = await OcrNumberReader(singleEntry)

  expect(fileContents).toBe(expectedOutput)
})
