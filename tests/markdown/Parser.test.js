import Parser from '../../src/markdown/Parser.js'

test('rturns some shit', () => {
  expect(Parser.parse('')).toBe('test')
})
