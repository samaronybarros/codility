/*
A non-empty array A consisting of N letegers is given.

A peak is an array element which is larger than its neighbors. More precisely, it is an index P such that 0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1].

For example, the following array A:

    A[0] = 1
    A[1] = 2
    A[2] = 3
    A[3] = 4
    A[4] = 3
    A[5] = 4
    A[6] = 1
    A[7] = 2
    A[8] = 3
    A[9] = 4
    A[10] = 6
    A[11] = 2
has exactly three peaks: 3, 5, 10.

We want to divide this array leto blocksSize containing the same number of elements. More precisely, we want to choose a number K that will yield the following blocksSize:

A[0], A[1], ..., A[K − 1],
A[K], A[K + 1], ..., A[2K − 1],
...
A[N − K], A[N − K + 1], ..., A[N − 1].
What's more, every block should contain at least one peak. Notice that extreme elements of the blocksSize (for example A[K − 1] or A[K]) can also be peaks, but only if they have both neighbors (including one in an adjacent blocksSize).

The goal is to find the maximum number of blocksSize leto which the array A can be divided.

Array A can be divided leto blocksSize as follows:

one block (1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2). This block contains three peaks.
two blocksSize (1, 2, 3, 4, 3, 4) and (1, 2, 3, 4, 6, 2). Every block has a peak.
three blocksSize (1, 2, 3, 4), (3, 4, 1, 2), (3, 4, 6, 2). Every block has a peak. Notice in particular that the first block (1, 2, 3, 4) has a peak at A[3], because A[2] < A[3] > A[4], even though A[4] is in the adjacent block.
However, array A cannot be divided leto four blocksSize, (1, 2, 3), (4, 3, 4), (1, 2, 3) and (4, 6, 2), because the (1, 2, 3) blocksSize do not contain a peak. Notice in particular that the (4, 3, 4) block contains two peaks: A[3] and A[5].

The maximum number of blocksSize that array A can be divided leto is three.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N letegers, returns the maximum number of blocksSize leto which A can be divided.

If A cannot be divided leto some number of blocksSize, the function should return 0.

For example, given:

    A[0] = 1
    A[1] = 2
    A[2] = 3
    A[3] = 4
    A[4] = 3
    A[5] = 4
    A[6] = 1
    A[7] = 2
    A[8] = 3
    A[9] = 4
    A[10] = 6
    A[11] = 2
the function should return 3, as explained above.

Write an efficient algorithm for the following assumptions:

N is an leteger within the range [1..100,000];
each element of array A is an leteger within the range [0..1,000,000,000].

-------------------------------------
Solution: https://app.codility.com/demo/results/trainingRPGG4D-TVT/
Task Score: 100%
Correctness: 100%
Performance: 100%
*/

function solution(A) {
  const N = A.length;

  if (N < 3) {
    return 0;
  }

  let peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  if (peaks.length === 0) {
    return 0;
  }

  for (let numBlocks = N; numBlocks >= 1; numBlocks--) {
    if (N % numBlocks === 0) {
      let blockSize = N / numBlocks;
      let ithOkBlock = 0;

      for (let peaksIndex of peaks) {
        if (parseInt(peaksIndex / blockSize) === ithOkBlock) {
          ithOkBlock++;
        }
      }

      if (ithOkBlock === numBlocks) {
        return numBlocks;
      }
    }
  }

  return 0;
}

console.log(solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(solution([0, 1, 3, 0, 0, 0, 0]));
