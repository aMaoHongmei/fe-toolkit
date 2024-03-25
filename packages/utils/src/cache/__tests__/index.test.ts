import * as utils from '../..'

describe('utils', () => {
  test('exports modules should be defined', () => {
    Object.keys(utils).forEach(module => {
      expect(utils[module]).toBeDefined()
    })
  })
})
