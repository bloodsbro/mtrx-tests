import Mtrx from 'mtrx';
import { assert } from 'chai';


describe('operations', () => {
  describe('multiply', () => {
    it('return a new matrix', () => {
      let a = new Mtrx([[8, 3, 1], [2, 1, 9], [2, 3, 0]]);

      assert.deepStrictEqual(Mtrx.mul(a, a), new Mtrx([[72, 30, 35], [36, 34, 11], [22, 9, 29]]));
    });

    it('n*n multiply n*1', () => {
      let a = new Mtrx([[8, 3, 1], [2, 1, 9], [2, 3, 0]]);
      let b = new Mtrx([[1], [2], [3]]);

      assert.deepStrictEqual(Mtrx.mul(a, b), new Mtrx([[17], [31], [8]]));
    });
  });

  it('inverse', () => {
    const a = new Mtrx([[3, 1, 4], [2, 4, 5], [8, 0, 1]]);
    const e = new Mtrx([[1, 0, 0], [0, 1, 0], [0, 0, 1]]);

    assert.deepStrictEqual(a.inv(a), [
      [-0.05128205128205128,  0.01282051282051282,  0.14102564102564102],
      [-0.48717948717948717,  0.3717948717948718 ,  0.08974358974358973],
      [ 0.41025641025641024, -0.10256410256410256, -0.1282051282051282 ]
    ]);
    assert.deepStrictEqual(Mtrx.mul(a, a.inv(a)), e);
  });

  it('return a new matrix that is param-matrix\'transpose', () => {
    let a = new Mtrx([[1, 2, 3], [4, 5, 6]]);

    assert.deepStrictEqual(a.T(), [[1, 4], [2, 5], [3, 6]]);
    assert.deepStrictEqual(a, [[1, 2, 3], [4, 5, 6]]);
  });

  describe('det', () => {
    it('return a number that is matrix\'s det', () => {
      let a = new Mtrx([[2, 2, 4], [6, 6, 18], [15, 12, 48]]);

      assert.strictEqual(a.det, 35.999999999999964);
    })

    it('return NaN, if accept a not-Square matrix', () => {
      let a = new Mtrx([[2, 2, 4], [15, 12, 48]]);

      assert.strictEqual(isNaN(a.det), true);
    })

    it('return 0, if the matrix is singular', () => {
      let a = new Mtrx([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);

      assert.strictEqual(a.det, 0);
    })

    it('fast calculate diag\'s det', () => {
      let a = new Mtrx([
        [2,  0,   0,   0],
        [0, -4,   0,   0],
        [0,  0, 0.3,   0],
        [0,  0,   0, 1.2]
      ]);

      assert.strictEqual(a.det, -2.88);
    });
  });
});
