/*
A non-empty array A consisting of N integers is given.

A peak is an array element which is larger than its neighbours. More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].

For example, the following array A:

    A[0] = 1
    A[1] = 5
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
has exactly four peaks: elements 1, 3, 5 and 10.

You are going on a trip to a range of mountains whose relative heights are represented by array A, as shown in a figure below. You have to choose how many flags you should take with you. The goal is to set the maximum number of flags on the peaks, according to certain rules.



Flags can only be set on peaks. What's more, if you take K flags, then the distance between any two flags should be greater than or equal to K. The distance between indices P and Q is the absolute value |P − Q|.

For example, given the mountain range represented by array A, above, with N = 12, if you take:

two flags, you can set them on peaks 1 and 5;
three flags, you can set them on peaks 1, 5 and 10;
four flags, you can set only three flags, on peaks 1, 5 and 10.
You can therefore set a maximum of three flags in this case.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A of N integers, returns the maximum number of flags that can be set on the peaks of the array.

For example, the following array A:

    A[0] = 1
    A[1] = 5
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

N is an integer within the range [1..400,000];
each element of array A is an integer within the range [0..1,000,000,000].

-------------------------------------
Solution: https://app.codility.com/demo/results/trainingYKX538-NEX/
Task Score: 100%
Correctness: 100%
Performance: 100%
*/

function solution(A) {
  var i = 0;
  var count = 0;
  var peaks = [];
  var next = [];

  peaks[0] = 0;
  peaks[A.length - 1] = 0;

  next[0] = 0;
  next[A.length - 1] = -1;

  for (i = A.length - 1; i > 1; i--) {
    peaks[i - 1] = 0;
    if (A[i - 2] < A[i - 1] && A[i - 1] > A[i]) {
      peaks[i - 1] = 1;
      count++;
    }

    if (peaks[i] === 1) {
      next[i - 1] = i;
    } else {
      next[i - 1] = next[i];
    }
  }

  if (next.length > 1) {
    if (peaks[1] === 1) {
      next[0] = 1;
    } else {
      next[0] = next[1];
    }
  }

  if (count < 2) {
    return count;
  }

  var max = Math.min(count, parseInt(Math.sqrt(A.length))) + 1;

  for (i = max; i > 0; i--) {
    if (check(peaks, next, i)) {
      return i;
    }
  }

  return 0;
}

function check(arr, next, total) {
  var count = 1;
  var base = next[0];
  var j = next[base];

  while (j < arr.length && j > 0) {
    if (j - base >= total) {
      count++;
      base = j;
      j = next[base];
    } else {
      j = next[j];
    }
  }

  return count >= total;
}

console.log(solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]));
console.log(solution([7, 10, 4, 5, 7, 4, 6, 1, 4, 3, 3, 7]));
