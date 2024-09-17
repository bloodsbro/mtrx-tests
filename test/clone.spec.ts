import Mtrx from 'mtrx';
import { assert } from 'chai';


describe('clone', () => {
  it('receive a matrix and return a new equaltions matrix', () => {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);

    let c = Mtrx.clone(matrix);

    assert.deepStrictEqual(c, matrix);
  })

  it('return a new matrix that is deep copy', () => {
    let matrix = new Mtrx([[1, 2, 3], [4, 5, 6]]);

    let c = Mtrx.clone(matrix);
    c[0][0] = 0;

    assert(c, matrix);
  })
})
