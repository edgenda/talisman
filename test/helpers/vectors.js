/**
 * Talisman stats/mean tests
 * ==========================
 *
 */
import assert from 'assert';
import {mean, vec} from '../../src/helpers/vectors';

describe('vectors', function() {

  describe('#.vec', function() {
    it('should create vectors of n dimensions.', function() {
      assert.deepEqual(vec(2, 0), [0, 0]);
      assert.deepEqual(vec(5, null), [null, null, null, null, null]);
    });
  });

  describe('#.mean', function() {
    it('should correctly compute the means of a list of vectors.', function() {
      const tests = [
        {
          vectors: [[1], [2], [3]],
          result: [2]
        },
        {
          vectors: [[1, 2], [2, 3], [1, 4]],
          result: [4 / 3, 9 / 3]
        },
        {
          vectors: [[1, 3, 2], [4, 5, 7], [0, 8, 7]],
          result: [5 / 3, 16 / 3, 16 / 3]
        }
      ];

      tests.forEach(function({vectors, result}) {
        assert.deepEqual(mean(vectors), result);
      });
    });
  });
});
