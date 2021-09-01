const convertDigitToSingleNumber = require('../../utils/convertDigitToSingleNumber')

it.each([
  [
    '1',
    [
      '   ',
      '  |',
      '  |',
    ],
  ],
  [
    '2',
    [
      ' _ ',
      ' _|',
      '|_ ',
    ],
  ],
  [
    '3',
    [
      ' _ ',
      ' _|',
      ' _|',
    ],
  ],
  [
    '4',
    [
      '   ',
      '|_|',
      '  |',
    ],
  ],
  [
    '5',
    [
      ' _ ',
      '|_ ',
      ' _|',
    ],
  ],
  [
    '6',
    [
      ' _ ',
      '|_ ',
      '|_|',
    ],
  ],
  [
    '7',
    [
      ' _ ',
      '  |',
      '  |',
    ],
  ],
  [
    '8',
    [
      ' _ ',
      '|_|',
      '|_|',
    ],
  ],
  [
    '9',
    [
      ' _ ',
      '|_|',
      ' _|',
    ],
  ]
])('converts a digit array %s into a single number', async (number, digitArray) => {
  const results = await convertDigitToSingleNumber(digitArray)

  expect(results).toStrictEqual(number)
})


