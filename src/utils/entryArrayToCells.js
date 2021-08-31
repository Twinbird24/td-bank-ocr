const entryArrayToCells = (entryArray) => {
  const digitLength = 3
  const entryLength = entryArray[0].length
  const digits = entryLength / digitLength
  const cells = []

  for (let i = 0; i < digits; i++) {
    cells.push([
      entryArray[0].substring(i*digitLength, (i*digitLength + digitLength)),
      entryArray[1].substring(i*digitLength, (i*digitLength + digitLength)),
      entryArray[2].substring(i*digitLength, (i*digitLength + digitLength)),
    ])
  }

  return cells
}

module.exports = entryArrayToCells;
