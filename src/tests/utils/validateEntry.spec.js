const validateEntry = require('../../utils/validateEntry')

it('return true when account number is valid', async () => {
  const validAccountNumber = '345882865'

  expect(validateEntry(validAccountNumber)).ToBe(true)
})

it('return false when account number is invalid', async () => {
  const inValidAccountNumber = '123123123'

  expect(validateEntry(validAccountNumber)).ToBe(false)
})
