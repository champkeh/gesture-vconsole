import GVC from '../src/index'
test('PN.strip can eliminate rounding errors', () => {
  var gvc = new GVC()
  expect(typeof gvc.vConsole).toBe('object')
})
