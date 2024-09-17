import Mtrx from 'mtrx';
import { assert } from 'chai';


describe('shape', () => {
  it('is same shape', () => {
    let a = new Mtrx([[1, 2, 3], [2, 3, 4]]);
    let b = new Mtrx([[3, 4, 1], [2, 3, 1]]);

    assert.strictEqual(Mtrx.isSameShape(a, b), true);
  });

  it('is diag', () => {
    let a = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);
    assert.strictEqual(Mtrx.isDiag(a), true);

    let b = new Mtrx([[0, 1, 3], [0.1, 0, 8], [4, 2, 0]]);
    assert.strictEqual(Mtrx.isDiag(b), false);
  });

  it('is like matrix', () => {
    let a = [[1, 2, 3], [2, 3, 5]];
    assert.strictEqual(Mtrx.isMtrxLike(a), true);

    let b = [[1, 2, 4], [3, 2]];
    assert.strictEqual(Mtrx.isMtrxLike(b), false);

    let c = [[undefined, 1, 3], [2, 3, 4]];
    assert.strictEqual(Mtrx.isMtrxLike(c), false);

    let d = [['a', 2, 3], [3, 2, 4]];
    assert.strictEqual(Mtrx.isMtrxLike(d), false);
  })
});
