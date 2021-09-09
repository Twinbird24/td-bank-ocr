const INVALID = 'invalid'
const intersection = require('lodash.intersection');

// each object represent a row, first object is top row, last object is bottom row
// each index represent a position in the row, form left to right
digitMapByRow = [
  {
    0: [
      [' ', '0,1,2,3,4,5,6,7,8,9'],
      ['|', INVALID],
      ['_', INVALID]
    ],
    1: [
      [' ', '1,4'],
      ['|', INVALID],
      ['_', '0,2,3,5,6,7,8,9']
    ],
    2: [
      [' ', '0,1,2,3,4,5,6,7,8,9'],
      ['|', INVALID],
      ['_', INVALID]
    ]
  },
  {
    0: [
      [' ', '1,2,3,7'],
      ['|', '0,4,5,6,8,9'],
      ['_', INVALID]
    ],
    1: [
      [' ', '0,1,7'],
      ['|', INVALID],
      ['_', '2,3,4,5,6,8,9']
    ],
    2: [
      [' ', '5,6'],
      ['|', '0,1,2,3,4,7,8,9'],
      ['_', INVALID]
    ]
  },
  {
    0: [
      [' ', '1,3,4,5,7,9'],
      ['|', '0,2,6,8'],
      ['_', INVALID]
    ],
    1: [
      [' ', '1,4,7'],
      ['|', INVALID],
      ['_', '0,2,3,5,6,8,9']
    ],
    2: [
      [' ', '2'],
      ['|', '0,1,3,4,5,6,7,8,9'],
      ['_', INVALID]
    ]
  }
]

const convertDigitToSingleNumber = (digit) => {
  const possibleNumbers = []
  digit.forEach((row, rowIndex) => {
    let rowNumberPossibility = row.split('').reduce((acc, curr, columnIndex) => {
      digitMapByRow[rowIndex][columnIndex].forEach(digitCharacterMap => {
        if (digitCharacterMap[0] === curr) {
          acc = acc.concat(digitCharacterMap[1])
        }
      })
      return acc
    }, [])

    rowNumberPossibility = intersection(
      rowNumberPossibility[0].split(','),
      rowNumberPossibility[1].split(','),
      rowNumberPossibility[2].split(',')
    )
    possibleNumbers.push(rowNumberPossibility)
  })

  return intersection(possibleNumbers[0], possibleNumbers[1], possibleNumbers[2])[0]
}

module.exports = convertDigitToSingleNumber;
