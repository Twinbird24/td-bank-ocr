const entryArrayToCells = require('../../utils/entryArrayToCells')

it('converts entry array of 9x4 into an array of 3x3 cells of numbers', async () => {
  const testInput = [
    '    _  _ ',
    '  | _| _|',
    '  ||_  _|',
    ''
  ]
  const expectedOutput = [
    [
      '   ',
      '  |',
      '  |',
    ],
    [
      ' _ ',
      ' _|',
      '|_ ',
    ],
    [
      ' _ ',
      ' _|',
      ' _|',
    ],
  ]

  const results = await entryArrayToCells(testInput)

  expect(results).toStrictEqual(expectedOutput)
})
