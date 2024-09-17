import Mtrx from 'mtrx';
import { assert } from 'chai';


describe('det', () => {
  it('return a number that is matrix\'s det', () => {
    let a = new Mtrx([[2, 2, 4], [6, 6, 18], [15, 12, 48]]);

    assert.strictEqual(a.det, 35.999999999999964)
  })

  it('return NaN, if accept a not-Square matrix', () => {
    let a = new Mtrx([[2, 2, 4], [15, 12, 48]]);

    assert.strictEqual(isNaN(a.det), true)
  })

  it('return 0, if the matrix is singular', () => {
    let a = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

    assert.strictEqual(a.det, 0)
  })

  it('fast calculate diag\'s det', () => {
    let a = new Mtrx([
      [2,  0,   0,   0],
      [0, -4,   0,   0],
      [0,  0, 0.3,   0],
      [0,  0,   0, 1.2]
    ]);

    assert.strictEqual(a.det, -2.88)
  })
})
