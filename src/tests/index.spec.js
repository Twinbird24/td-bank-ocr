const OcrNumberReader = require('../index.js')
const { readFile } = require('fs/promises')
const path = require('path');

it('reads a single-entry file and outputs a file with with the correct number', async () => {
  const singleEntry = path.join(__dirname + '/../examples/single-entry.txt')
  const outputFile = path.join(__dirname + '/../output/account-numbers.txt')
  const expectedOutput = '123456789'

  await OcrNumberReader(singleEntry)

  const fileContents = await readFile(outputFile, { encoding: "utf8" })

  expect(fileContents).toBe(expectedOutput)
})

it('reads a file of entires and outputs a file with a list of numbers', async () => {
  const useCase1 = path.join(__dirname + '/../examples/use-case-1.txt')
  const outputFile = path.join(__dirname + '/../output/account-numbers.txt')
  const expectedOutput = `000000000
111111111
222222222
333333333
444444444
555555555
666666666
777777777
888888888
999999999
123456789`

  await OcrNumberReader(useCase1)

  const fileContents = await readFile(outputFile, { encoding: "utf8" })

  expect(fileContents).toBe(expectedOutput)
})
